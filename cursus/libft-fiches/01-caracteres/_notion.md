# Notion : les caractères et la table ASCII

## Ce que tu dois retenir
- Un `char` est en réalité un **petit nombre** (1 octet). `'A'` vaut 65, `'a'` vaut 97, `'0'` vaut 48.
- Les lettres et les chiffres sont rangés **dans l'ordre** dans la table ASCII, donc « c est une minuscule » se traduit par `c >= 'a' && c <= 'z'`.
- Écart entre minuscule et majuscule : `'a' - 'A' = 32`.

| Zone | Codes | Contenu |
|---|---|---|
| Contrôle | 0 à 31 et 127 | `\0`, `\t`, `\n`, DEL... (non imprimables) |
| Imprimables | 32 à 126 | espace, ponctuation, chiffres (48-57), majuscules (65-90), minuscules (97-122) |

## Pourquoi `int` et pas `char` ?
Les fonctions de `<ctype.h>` prennent un `int` car elles doivent aussi accepter `EOF` (valeur -1). Un `char` ne peut pas représenter ce cas proprement.

## Où ça devient piégeux
- Les **bornes** : `<=` ou `<`, 126 ou 127. Une seule erreur de signe et la fonction est fausse sur la plupart des entrées.
- Le **nom des paramètres** : tu en changes un dans la signature et tu oublies de le changer dans le corps (c'est le cas de `ft_isalnum`).
- Toujours tester les **bords** : `'a'-1`, `'a'`, `'z'`, `'z'+1`, `0`, `127`, `128`.

## Fiches
`ft_isalpha`, `ft_isdigit`, `ft_isalnum`, `ft_isascii`, `ft_isprint`, `ft_toupper`, `ft_tolower`
