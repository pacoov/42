# Notion : écrire sur un descripteur de fichier (`write`)

## Ce que tu dois retenir
- Un **descripteur de fichier** (fd) est un entier qui désigne un flux ouvert. Les trois premiers existent toujours : `0` = entrée standard, `1` = sortie standard, `2` = sortie d'erreur.
- `write(fd, adresse, nb_octets)` est un **appel système** : il demande au noyau d'écrire. Il n'est pas bufferisé comme `printf`.
- On lui donne l'**adresse** des octets à écrire, d'où `&c` pour un caractère.
- Les fonctions `_fd` te permettent d'écrire ailleurs que sur l'écran (fichier, `stderr`...).

## Où ça devient complexe
1. **La récursivité de `ft_putnbr_fd`** : l'ordre d'écriture des chiffres vient de l'ordre de retour des appels.
2. **`INT_MIN`** : même piège que `itoa`.
3. **Performance** : un `write` par caractère fait autant d'appels système que de caractères. Un seul `write(fd, s, ft_strlen(s))` fait la même chose en un appel.
4. **Valeur de retour de `write`** ignorée : acceptable pour la libft (les prototypes sont `void`).

## Fiches
`ft_putchar_fd`, `ft_putstr_fd`, `ft_putendl_fd`, `ft_putnbr_fd`
