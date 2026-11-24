# ft_putchar_fd

**Prototype** : `void ft_putchar_fd(char c, int fd)`

## Rôle
Écrit le caractère `c` sur le descripteur de fichier `fd`.

## Ton code
```c
#include "libft.h"

void	ft_putchar_fd(char c, int fd)
{
	write(fd, &c, 1);
}
```

## Comment ça marche
Un seul appel système : `write(fd, &c, 1)`.

## Points complexes
`write` attend l'**adresse** de ce qu'on écrit, d'où `&c` (adresse de la variable locale). Le `1` est le nombre d'octets.

## Bugs / à corriger dans ton code
Aucun bug.
