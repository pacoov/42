# ft_memmove

**Prototype** : `void *ft_memmove(void *dst, const void *src, size_t len)`

## Rôle
Comme `memcpy`, mais **fonctionne même si les zones se chevauchent**.

## Ton code
```c
#include "libft.h"

void	*ft_memmove(void *dest, const void *src, size_t n)
{
	size_t	i;

	i = 0;
	if ((char *dest)dst > (char *)src)
	{
		while (n > 0)
		{
			n--;
			((char *)dst)[n] = ((char *)src)[n];
		}
	}
	else
	{
		while (i < n)
		{
			((char *)dst)[i] = ((char *)src)[i];
			i++;
		}
	}
	return (dst);
}
```

## Comment ça marche
Si `dst > src`, on copie à l'envers (du dernier octet au premier). Sinon, on copie à l'endroit.

## Points complexes
C'est LA fonction difficile de cette notion. Exemple avec `src = "ABCDEF"` et `dst = src + 2` (n = 4) :

```
index :   0 1 2 3 4 5 6 7
avant :   A B C D E F
          src---------->
              dst---------->
```

- **Copie à l'endroit** (faux ici) : `dst[0]=src[0]` écrase `C` par `A`, puis `dst[1]=src[1]` écrase `D` par `B`, puis `dst[2]=src[2]` recopie... `A`, l'octet déjà écrasé. Résultat corrompu.
- **Copie à l'envers** (correct) : on recopie d'abord le dernier octet, puis l'avant-dernier... On ne lit jamais un octet déjà écrasé.

Règle : `dst > src` → à l'envers ; `dst < src` → à l'endroit (là, écrire à l'endroit ne détruit rien dont on a encore besoin).

Dans la boucle à l'envers, `n--` **avant** la copie permet d'utiliser `n` comme index (de n-1 à 0) sans passer par une valeur négative avec un `size_t`.

## Bugs / à corriger dans ton code
**BUG (compilation)** : la ligne `if ((char *dest)dst > (char *)src)` n'est pas du C valide, et le paramètre est nommé `dest` alors que le corps utilise `dst`.

```c
void	*ft_memmove(void *dst, const void *src, size_t n)
{
	...
	if ((char *)dst > (char *)src)
```

Pense aussi au cas `dst == src` : la branche « à l'endroit » ne fait rien de grave.
