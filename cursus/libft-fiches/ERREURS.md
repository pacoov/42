# ERREURS : récapitulatif de ton libft

Mise à jour d'après le dossier tel que tu me l'as donné le 25/11 (45 fichiers). Chaque fichier a été compilé séparément avec `-Wall -Wextra -Werror`, puis j'ai comparé les symboles définis avec ceux déclarés dans `libft.h`. J'ai ensuite appliqué les corrections ci-dessous sur une **copie** (ton dossier n'est pas modifié) et lancé des tests contre la libc et AddressSanitizer : tout passe une fois ces corrections faites.

## Où tu en es

| | Avant | Maintenant |
|---|---|---|
| Fichiers qui ne compilent pas | 4 | **3** (`ft_memchr`, `ft_memcpy`, `ft_memmove`) |
| Symboles de `libft.h` introuvables à l'édition de liens | non vérifié | **6** : `ft_bzero`, `ft_lstnew`, `ft_memcmp`, et `ft_memchr`, `ft_memcpy`, `ft_memmove` (ces trois-là parce que leur fichier ne compile pas) |
| Erreurs de logique | 2 | **2** (inchangées) |

## Déjà corrigé depuis la dernière fois ✓
- `ft_isalnum` : `c` → `i`.
- `ft_strlen` : prototype `size_t ft_strlen(const char *)` dans le `.c` et dans `libft.h`.
- `libft.h` : `ft_lstsize` n'est plus déclarée deux fois.
- `ft_split` ajoutée (correcte, testée).
- Fonctions de liste ajoutées (voir plus bas pour deux soucis).

## 1. Bloquant : le projet ne se construit pas

| Fichier | Problème | Correction |
|---|---|---|
| `ft_memchr.c` ligne 22 | `unisgned` | `unsigned` |
| `ft_memcpy.c` ligne 25 | `return (dest);` mais le paramètre est `dst` | `return (dst);` |
| `ft_memmove.c` ligne 20 | `if ((char *dest)dst > ...)` invalide, et le paramètre est nommé `dest` alors que le corps utilise `dst` | paramètre `dst`, et `if ((char *)dst > (char *)src)` |
| `ft_memcmp.c` | la fonction s'appelle `ft_memcmmp` (compile, mais `ft_memcmp` est introuvable à l'édition de liens) | renommer en `ft_memcmp` |
| `ft_lsnew.c` | le fichier **et** la fonction s'appellent `ft_lsnew` (il manque le `t`) | renommer en `ft_lstnew.c` / `ft_lstnew` |
| `ft_bzero` | déclarée dans `libft.h`, utilisée par `ft_calloc`, mais aucun fichier | créer `ft_bzero.c` : `void ft_bzero(void *s, size_t n) { ft_memset(s, 0, n); }` |

Contrôle : après ces six corrections, `ar rcs libft.a` fonctionne et il n'y a plus de symbole manquant.

## 2. Erreurs de logique (ça compile mais le résultat est faux)

| Fichier | Problème | Correction |
|---|---|---|
| `ft_isalpha.c` | `i >= 'z'` | `i <= 'z'` (aujourd'hui, 'a' à 'y' renvoient 0) |
| `ft_isprint.c` | `i <= 127` (127 = DEL, non imprimable) | `i <= 126` |

## 3. Fuite mémoire / robustesse

| Fichier | Problème | Correction |
|---|---|---|
| `ft_lstmap.c` | si `ft_lstnew(f(...))` échoue, le résultat de `f` n'est jamais libéré (fuite) | garder `f(...)` dans une variable et faire `del(content)` en cas d'échec (code dans la fiche) |
| `ft_lstadd_back.c` | `ft_lstadd_back(NULL, x)` segfault (testé) | `if (!lst \|\| !new) return ;` |
| `ft_lstdelone.c` | plante si `del == NULL` | `if (!lst \|\| !del) return ;` (facultatif) |
| `ft_lstsize.c` | retourne `unsigned int`, le sujet demande `int` | `int ft_lstsize(t_list *lst)` (aussi dans `libft.h`) |
| `ft_strlen.c` | `int i` alors que la fonction renvoie un `size_t` | `size_t i;` |
| `ft_substr.c`, `ft_strmapi.c`, `ft_striteri.c`, `ft_putstr_fd.c`... | pas de test `NULL` sur les paramètres | facultatif : le sujet n'impose rien, mais ça évite un segfault |

## 4. Makefile
- `%.o: %.cc` : faute de frappe, c'est `%.c`.
- `SRCS = $(wildcard *.c)` : le sujet 42 interdit `wildcard`. Liste tes fichiers à la main (et tu éviteras de compiler un `main.c` de test oublié dans le dossier).
- Ajoute `.PHONY: all clean fclean re`.
- Mets `all` comme **première** règle.
- Selon la version de ton sujet, si les fonctions `ft_lst*` sont comptées en bonus, il faut une règle `bonus` et les fichiers peuvent devoir s'appeler `*_bonus.c`. Vérifie ton sujet.

## 5. README
Ton `README.md` dit « No AI was used for this project. ». Si tu as utilisé une IA (par exemple pour des explications ou des relectures), la section « Resources » du sujet demande de dire **comment** elle a été utilisée. À adapter pour que ce soit exact.

## Norme (à vérifier avec `norminette`, je ne l'ai pas lancée)
- `ft_split` : `(char *)s` inutiles si `count_mots` et `copy_word` prennent `char const *` ; dans `ft_split.c` le `main` de test commenté appelle `free_tab`, fonction `static` qui n'existe que dans ce fichier.
- Les en-têtes 42 contiennent ton login, c'est normal.

## Ordre de correction conseillé
1. Les 6 lignes de la partie 1 (le projet se construit).
2. `isalpha` et `isprint` (partie 2).
3. `ft_lstmap` (fuite).
4. Makefile.
5. Le reste, facultatif.
