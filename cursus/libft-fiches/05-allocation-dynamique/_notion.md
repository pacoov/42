# Notion : l'allocation dynamique (`malloc`) et la propriété de la mémoire

## Ce que tu dois retenir
- `malloc(n)` réserve `n` octets sur le **tas** et renvoie l'adresse, ou `NULL` si ça échoue.
- Celui qui appelle ta fonction devient **propriétaire** du résultat : il doit appeler `free`. Ta fonction, elle, ne `free` jamais son propre résultat.
- Une chaîne de `L` caractères occupe `L + 1` octets (le `\0`).

## Check-list à appliquer à CHAQUE fonction qui alloue
1. **Calculer la bonne taille** (ne pas oublier le `+1`).
2. **Tester le retour de `malloc`** et renvoyer `NULL` en cas d'échec.
3. **Écrire le `\0` final**.
4. **Tester les entrées `NULL`** (au choix, mais décide une fois pour toutes).
5. Si tu alloues plusieurs fois et que la 2e échoue, **libère la 1re** avant de renvoyer `NULL` (surtout pour `ft_split` et `ft_lstmap`).

## Où ça devient complexe
- **Dépassement de la multiplication** (`ft_calloc`) : `count * size` peut « boucler ». On le détecte avec une division : `count > SIZE_MAX / size`.
- **Soustraction de `size_t`** (`ft_substr`) : `slen - start` n'a de sens que si `start < slen`, sinon on obtient un nombre gigantesque.
- **Bornes inclusives / exclusives** (`ft_strtrim`) : `end` pointe *après* le dernier caractère gardé, donc on lit `s1[end - 1]`.
- **Cas dégénérés** : chaîne vide, `len = 0`, `start` hors limites, `set` vide. Ce sont eux que la moulinette teste.

## Fiches
`ft_calloc`, `ft_strdup`, `ft_substr`, `ft_strjoin`, `ft_strtrim`

## Fonction manquante
`ft_split` est déclarée dans `libft.h` mais il n'y a pas de `ft_split.c` dans ton dossier. C'est la plus difficile de cette notion (allocation d'un tableau de chaînes, libération en cas d'échec au milieu).
