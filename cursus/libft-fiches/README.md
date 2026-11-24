# libft : fiches d'explication

Une fiche par fonction, rangée par notion. Dans chaque dossier, `_notion.md` explique le concept et les passages difficiles, puis chaque fonction a sa fiche.

## Sommaire

- **01-caracteres** : Les caractères et la table ASCII
  - `ft_isalnum`, `ft_isalpha`, `ft_isascii`, `ft_isdigit`, `ft_isprint`, `ft_tolower`, `ft_toupper`
- **02-chaines-lecture** : Lire et parcourir des chaînes
  - `ft_strchr`, `ft_strlen`, `ft_strncmp`, `ft_strnstr`, `ft_strrchr`
- **03-memoire-octets** : Mémoire brute (octets)
  - `ft_memchr`, `ft_memcmp`, `ft_memcpy`, `ft_memmove`, `ft_memset`
- **04-copie-et-concatenation-bornees** : Copie et concaténation bornées
  - `ft_strlcat`, `ft_strlcpy`
- **05-allocation-dynamique** : Allocation dynamique
  - `ft_calloc`, `ft_strdup`, `ft_strjoin`, `ft_strtrim`, `ft_substr`
- **06-conversions-nombres-chaines** : Conversions nombres / chaînes
  - `ft_atoi`, `ft_itoa`
- **07-pointeurs-sur-fonctions** : Pointeurs sur fonctions
  - `ft_striteri`, `ft_strmapi`
- **08-ecriture-sur-descripteur-de-fichier** : Écriture sur descripteur de fichier
  - `ft_putchar_fd`, `ft_putendl_fd`, `ft_putnbr_fd`, `ft_putstr_fd`

## Ordre de lecture conseillé

01 caractères → 02 lecture de chaînes → 03 mémoire brute → 04 copie bornée → 05 allocation → 06 conversions → 07 pointeurs sur fonctions → 08 écriture sur fd.

## Récapitulatif des erreurs repérées dans ton code

Elles sont détaillées dans la section « Bugs » de chaque fiche. Cette liste te sert de check-list de correction.

### Erreurs de compilation (ton `make` échoue)
| Fichier | Problème | Correction |
|---|---|---|
| `ft_isalnum.c` | `ft_isdigit(c)` alors que le paramètre est `i` | `ft_isdigit(i)` |
| `ft_memchr.c` | `unisgned` | `unsigned` |
| `ft_memcmp.c` | fonction nommée `ft_memcmmp` | `ft_memcmp` |
| `ft_memcpy.c` | `return (dest)` alors que le paramètre est `dst` | `return (dst)` |
| `ft_memmove.c` | `if ((char *dest)dst > ...)` invalide, paramètre `dest` vs `dst` | `if ((char *)dst > (char *)src)` et paramètre `dst` |
| `ft_strlen.c` + `libft.h` | `int ft_strlen(char *)` : warnings `const` et `sign-compare`, donc erreurs avec `-Werror` | `size_t ft_strlen(const char *)` |

### Erreurs de logique (ça compile, mais le résultat est faux)
| Fichier | Problème | Correction |
|---|---|---|
| `ft_isalpha.c` | `i >= 'z'` | `i <= 'z'` |
| `ft_isprint.c` | `i <= 127` (DEL n'est pas imprimable) | `i <= 126` |

### Fonctions déclarées dans `libft.h` mais absentes du dossier
- `ft_bzero` (utilisée par `ft_calloc`, donc le lien échoue sans elle)
- `ft_split`
- Partie bonus : `ft_lstnew`, `ft_lstadd_front`, `ft_lstsize`, `ft_lstadd_back`, `ft_lstlast`, `ft_lstdelone`, `ft_lstclear`, `ft_lstiter`, `ft_lstmap`

Ces fonctions n'ont donc pas de fiche. Quand tu les écriras, envoie-les-moi et je ferai les fiches (notions « tableaux de chaînes » et « listes chaînées »).

### `libft.h`
- `ft_lstsize` est déclarée **deux fois**.
- Le prototype de `ft_strlen` est à corriger (voir ci-dessus).

### `Makefile`
- `%.o: %.cc` : faute de frappe, ça devrait être `%.c`.
- `$(wildcard *.c)` : le sujet 42 interdit `wildcard`. Liste tes fichiers à la main dans `SRCS`.
- Ajoute `.PHONY: all clean fclean re` et mets la règle `all` en premier.
