# ft_substr

**Prototype** : `char *ft_substr(char const *s, unsigned int start, size_t len)`

## Rôle
Renvoie une nouvelle chaîne de **au plus `len` caractères**, prise dans `s` à partir de l'indice `start`.

## Ton code
```c
#include "libft.h"

char	*ft_substr(char const *s, unsigned int start, size_t len)
{
	char	*res;
	size_t	slen;
	size_t	i;
	size_t	j;

	slen = ft_strlen(s);
	if (start >= slen)
		return (ft_strdup(""));
	if (len > slen - start)
		len = slen - start;
	res = malloc(sizeof(char) * (len + 1));
	if (!res)
		return (NULL);
	i = start;
	j = 0;
	while (j < len && s[i])
	{
		res[j] = s[i];
		i++;
		j++;
	}
	res[j] = '\0';
	return (res);
}
```

## Comment ça marche
1. Si `start` est après la fin de `s` → on renvoie une chaîne vide.
2. On réduit `len` à ce qui reste réellement dans `s` après `start`.
3. On alloue `len + 1`, on copie, on termine par `\0`.

## Points complexes
- **`start >= slen` renvoie `""` et pas `NULL`** : c'est le comportement attendu (une sous-chaîne vide, allouée, à libérer).
- **`if (len > slen - start)`** : sans cette réduction, `ft_substr("abc", 1, 1000000)` allouerait un énorme buffer pour rien. La soustraction `slen - start` est sûre car on a déjà vérifié `start < slen` (sinon un `size_t` repasserait à une valeur énorme).
- Le test `s[i]` dans la boucle est redondant après la réduction de `len`, mais sans danger.

## Bugs / à corriger dans ton code
Pas de test `if (!s)` : `ft_substr(NULL, ...)` fait planter `ft_strlen`. À toi de décider si tu veux ce garde-fou.
