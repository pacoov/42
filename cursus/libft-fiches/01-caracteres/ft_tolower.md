# ft_tolower

**Prototype** : `int ft_tolower(int c)`

## Rôle
Convertit une majuscule en minuscule. Tout autre caractère est renvoyé tel quel.

## Ton code
```c
#include "libft.h"

int	ft_tolower(int c)
{
	if (c >= 'A' && c <= 'Z')
		c += 32;
	return (c);
}
```

## Comment ça marche
Même principe que `ft_toupper`, dans l'autre sens : on ajoute 32 si `c` est entre 'A' et 'Z'.

## Points complexes
Voir `ft_toupper` (écart de 32 entre majuscule et minuscule).

## Bugs / à corriger dans ton code
Aucun bug.
