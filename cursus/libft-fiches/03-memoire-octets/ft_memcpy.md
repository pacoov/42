# ft_memcpy

**Prototype** : `void *ft_memcpy(void *dst, const void *src, size_t n)`

## Rôle
Copie `n` octets de `src` vers `dst`. Renvoie `dst`.

## Ton code
```c
#include "libft.h"

void	*ft_memcpy(void *dst, const void *src, size_t n)
{
	size_t	i;

	i = 0;
	while (i < n)
	{
		((char *)dst)[i] = ((char *)src)[i];
		i++;
	}
	return (dest);
}
```

## Comment ça marche
Boucle de 0 à n-1 : `dst[i] = src[i]`, toujours dans le sens croissant.

## Points complexes
- **Zones qui se chevauchent** : le comportement est indéfini. Si `dst` est juste après `src`, la copie écrase des octets de `src` avant de les lire. C'est précisément le problème que `ft_memmove` résout.
- Les deux pointeurs sont des `void *` : on les caste en pointeurs d'octets pour pouvoir les indexer.
- Le vrai `memcpy(NULL, NULL, n)` plante. Certains ajoutent `if (!dst && !src) return (NULL);` : à toi de voir si tu veux ce garde-fou.

## Bugs / à corriger dans ton code
**BUG (compilation)** : tu retournes `dest` mais le paramètre s'appelle `dst`.

```c
return (dst);
```
