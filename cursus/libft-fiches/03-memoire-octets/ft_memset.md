# ft_memset

**Prototype** : `void *ft_memset(void *s, int c, size_t n)`

## Rôle
Remplit les `n` premiers octets de la zone `s` avec la valeur `c`. Renvoie `s`.

## Ton code
```c
#include "libft.h"

void	*ft_memset(void *s, int c, size_t n)
{
	size_t	i;

	i = 0;
	while (i < n)
	{
		((char *)s)[i] = c;
		i++;
	}
	return (s);
}
```

## Comment ça marche
Boucle de 0 à n-1 qui écrit `c` dans chaque octet.

## Points complexes
- **Octet par octet** : `c` est converti en `unsigned char`. `ft_memset(tab, 1, 4 * sizeof(int))` met chaque **octet** à 1 (donc chaque `int` vaut 0x01010101, pas 1). C'est pour ça que `memset` sert surtout à mettre à 0.
- `n` est un nombre d'**octets**, pas d'éléments : pour un tableau d'`int`, c'est `nb * sizeof(int)`.
- Caster en `(unsigned char *)` est plus propre que `(char *)` (pas de souci de signe).

## Bugs / à corriger dans ton code
Aucun bug fonctionnel.
