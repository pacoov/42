# ft_strlcat

**Prototype** : `size_t ft_strlcat(char *dst, const char *src, size_t dstsize)`

## Rôle
Ajoute `src` à la fin de `dst`, sans dépasser `dstsize` octets au total, avec un `\0` final. Renvoie la longueur qu'aurait la chaîne si rien n'était tronqué.

## Ton code
```c
#include "libft.h"

size_t	ft_strlcat(char *dst, const char *src, size_t n)
{
	size_t	i;
	size_t	k;

	i = ft_strlen(dst);
	if (n == 0)
		return (ft_strlen(src));
	if (i >= n)
		return (n + ft_strlen(src));
	k = 0;
	while (src[k] && i + k + 1 < n)
	{
		dst[i + k] = src[k];
		k++;
	}
	dst[i + k] = '\0';
	return (i + ft_strlen(src));
}
```

## Comment ça marche
1. On mesure `dst` actuel (`i`).
2. On copie `src` à partir de `dst + i` tant qu'il reste de la place pour le `\0`.
3. On termine par `\0`.

## Points complexes
C'est la fonction la plus piégeuse de la libft. Les trois cas à bien voir :

- **`n == 0`** : on n'écrit rien. On renvoie `ft_strlen(src)`.
- **`i >= n`** : `dst` est déjà plus long que le buffer autorisé. On n'écrit rien et on renvoie `n + ft_strlen(src)`.
- **Cas normal** : la condition `i + k + 1 < n` garde la place du `\0`.

La valeur de retour vaut **toujours** `longueur(dst initiale) + longueur(src)` (plafonnée à `n` pour la partie `dst`). Troncature détectée si `retour >= n`.

Exemple avec `dst = "Hello"` (taille du buffer 8), `src = " World"` : `i = 5`, on copie ' ', 'W' (2 caractères, `5+2+1 = 8`), on pose `\0` → `"Hello W"`. Retour : `5 + 6 = 11` → `11 >= 8`, donc tronqué.

## Bugs / à corriger dans ton code
Aucun bug.
