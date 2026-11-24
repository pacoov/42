# ft_memchr

**Prototype** : `void *ft_memchr(const void *s, int c, size_t n)`

## Rôle
Cherche l'octet `c` dans les `n` premiers octets de `s`. Renvoie un pointeur dessus ou `NULL`.

## Ton code
```c
#include "libft.h"

void	*ft_memchr(const void *s, int c, size_t n)
{
	size_t	i;

	i = 0;
	while (i < n)
	{
		if (((unsigned char *)s)[i] == (unisgned char)c)
			return ((void *)&((unsigned char *)s)[i]);
		i++;
	}
	return (NULL);
}
```

## Comment ça marche
Parcours de 0 à n-1. Pour chaque octet, on compare avec `(unsigned char)c`. À la première égalité, on renvoie son adresse.

## Points complexes
- Différence avec `strchr` : **ne s'arrête pas au `\0`**. Elle ne s'arrête qu'après `n` octets. Elle marche donc sur des données binaires.
- `void *` ne permet pas l'arithmétique ni le déréférencement : on caste d'abord en `(unsigned char *)`.
- L'expression de retour `(void *)&((unsigned char *)s)[i]` se lit : « adresse de l'octet i, convertie en `void *` ». Équivalent plus lisible : `return ((unsigned char *)s + i);`.

## Bugs / à corriger dans ton code
**BUG (compilation)** : `unisgned` → `unsigned` dans la comparaison.
