# ft_putstr_fd

**Prototype** : `void ft_putstr_fd(char *s, int fd)`

## Rôle
Écrit la chaîne `s` sur `fd`.

## Ton code
```c
#include "libft.h"

void	ft_putstr_fd(char *str, int fd)
{
	int	i;

	i = 0;
	while (str[i])
	{
		write(fd, &str[i], 1);
		i++;
	}
}
```

## Comment ça marche
On parcourt la chaîne et on écrit chaque caractère avec `write`.

## Points complexes
- Tu fais un `write` **par caractère** : un appel système par octet, c'est lent. Une version plus efficace : `write(fd, s, ft_strlen(s))` en un seul appel.
- Si `s` est `NULL`, ça plante (le vrai `putstr` aussi). Tu peux ajouter `if (!s) return;`.

## Bugs / à corriger dans ton code
Aucun bug fonctionnel.
