# ft_putendl_fd

**Prototype** : `void ft_putendl_fd(char *s, int fd)`

## Rôle
Écrit la chaîne `s` suivie d'un retour à la ligne sur `fd`.

## Ton code
```c
#include "libft.h"

void	ft_putendl_fd(char *s, int fd)
{
	int	i;

	i = 0;
	while (s[i])
	{
		ft_putchar_fd(s[i], fd);
		i++;
	}
	ft_putchar_fd('\n', fd);
}
```

## Comment ça marche
Même boucle que `putstr`, puis `ft_putchar_fd('\n', fd)`.

## Points complexes
Tu peux simplement écrire `ft_putstr_fd(s, fd); ft_putchar_fd('\n', fd);` : on réutilise ses propres fonctions.

## Bugs / à corriger dans ton code
Aucun bug fonctionnel.
