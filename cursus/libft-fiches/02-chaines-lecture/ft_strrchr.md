# ft_strrchr

**Prototype** : `char *ft_strrchr(const char *s, int c)`

## Rôle
Renvoie un pointeur vers la **dernière** occurrence de `c` dans `s`, ou `NULL`.

## Ton code
```c
#include "libft.h"

char	*ft_strrchr(const char *s, int c)
{
	int	i;

	i = ft_strlen(s);
	while (i >= 0 && s[i] != (char)c)
		i--;
	if (i >= 0)
		return ((char *)&s[i]);
	return (NULL);
}
```

## Comment ça marche
On part de la fin (`i = ft_strlen(s)`, donc sur le `\0`) et on recule jusqu'à trouver `c` ou sortir de la chaîne (`i < 0`).

## Points complexes
- On démarre **sur** le `\0` et pas juste avant : ainsi `ft_strrchr(s, '\0')` fonctionne.
- **Piège du `size_t`** : si `i` était un `size_t`, `i >= 0` serait toujours vrai (un entier non signé ne descend jamais sous 0, il repasse à la valeur maximale). Garde `i` en `int` pour cette boucle, ou écris une boucle qui s'arrête à `i == 0` avec un test final.

## Bugs / à corriger dans ton code
Aucun bug (une fois `ft_strlen` corrigé).
