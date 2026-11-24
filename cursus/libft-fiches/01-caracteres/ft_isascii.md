# ft_isascii

**Prototype** : `int ft_isascii(int c)`

## Rôle
Renvoie 1 si `c` est dans la table ASCII standard (0 à 127).

## Ton code
```c
#include "libft.h"

int	ft_isascii(int i)
{
	if (i >= 0 && i <= 127)
		return (1);
	else
		return (0);
}
```

## Comment ça marche
Un intervalle : 0 à 127 inclus. Au-delà de 127, ce sont des octets « étendus » (par exemple les octets d'un caractère UTF-8 comme é).

## Points complexes
Rien de complexe.

## Bugs / à corriger dans ton code
Aucun bug.
