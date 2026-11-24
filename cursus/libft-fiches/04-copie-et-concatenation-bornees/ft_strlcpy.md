# ft_strlcpy

**Prototype** : `size_t ft_strlcpy(char *dst, const char *src, size_t dstsize)`

## Rôle
Copie `src` dans `dst` sans jamais écrire plus de `dstsize` octets, et termine toujours par `\0` (si `dstsize > 0`). Renvoie la longueur de `src`.

## Ton code
```c
#include "libft.h"

size_t	ft_strlcpy(char *dst, const char *src, size_t n)
{
	size_t	i;

	if (!n)
		return (ft_strlen(src));
	i = 0;
	while (src[i] && i < n - 1)
	{
		dst[i] = src[i];
		i++;
	}
	dst[i] = '\0';
	return (ft_strlen(src));
}
```

## Comment ça marche
On copie caractère par caractère tant qu'il reste de la place pour un `\0` (`i < n - 1`), puis on pose le `\0`.

## Points complexes
- **`n` est la taille totale du buffer `dst`**, pas le nombre de caractères à copier. On garde 1 octet pour le `\0`, d'où `n - 1`.
- **`if (!n)`** avant `n - 1` est indispensable : avec `n = 0`, `n - 1` vaut la valeur maximale d'un `size_t` (dépassement vers le bas), et la boucle écrirait n'importe où.
- **La valeur de retour** est `ft_strlen(src)`, la longueur qu'on **voulait** copier. Elle permet de détecter une troncature : `if (ft_strlcpy(dst, src, taille) >= taille)` alors la chaîne a été coupée.

## Bugs / à corriger dans ton code
Aucun bug.
