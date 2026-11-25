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
  - `ft_calloc`, `ft_split`, `ft_strdup`, `ft_strjoin`, `ft_strtrim`, `ft_substr`
- **06-conversions-nombres-chaines** : Conversions nombres / chaînes
  - `ft_atoi`, `ft_itoa`
- **07-pointeurs-sur-fonctions** : Pointeurs sur fonctions
  - `ft_striteri`, `ft_strmapi`
- **08-ecriture-sur-descripteur-de-fichier** : Écriture sur descripteur de fichier
  - `ft_putchar_fd`, `ft_putendl_fd`, `ft_putnbr_fd`, `ft_putstr_fd`
- **09-listes-chainees** : Listes chaînées
  - `ft_lstadd_back`, `ft_lstadd_front`, `ft_lstclear`, `ft_lstdelone`, `ft_lstiter`, `ft_lstlast`, `ft_lstmap`, `ft_lstnew`, `ft_lstsize`

## Ordre de lecture conseillé

01 caractères → 02 lecture de chaînes → 03 mémoire brute → 04 copie bornée → 05 allocation → 06 conversions → 07 pointeurs sur fonctions → 08 écriture sur fd → 09 listes chaînées.

## Erreurs

Voir **ERREURS.md** : liste à jour de ce qu'il reste à corriger, par priorité.
