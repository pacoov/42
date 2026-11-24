# ft_strnstr

**Prototype** : `char *ft_strnstr(const char *s1, const char *s2, size_t n)`

## Rôle
Cherche la chaîne `s2` dans `s1`, en regardant au plus `n` caractères de `s1`. Renvoie un pointeur vers le début de la première occurrence, ou `NULL`.

## Ton code
```c
#include "libft.h"

char	*ft_strnstr(const char *s1, const char *s2, size_t n)
{
	size_t	i;
	size_t	j;

	if (s2[0] == '\0')
		return ((char *)s1);
	i = 0;
	while (i < n && s1[i])
	{
		j = 0;
		while (i + j < n && s1[i + j] && s1[i + j] == s2[j])
			j++;
		if (s2[j] == '\0')
			return ((char *)&s1[i]);
		i++;
	}
	return (NULL);
}
```

## Comment ça marche
Deux boucles imbriquées : `i` est la position de départ possible dans `s1`, `j` avance tant que les caractères correspondent. Si `j` atteint la fin de `s2`, on a tout trouvé.

## Points complexes
- **Aiguille vide** : si `s2` est vide on renvoie `s1` (comportement du vrai `strnstr`).
- **La limite `i + j < n`** : elle s'applique à la position **réelle** dans `s1`, pas seulement à `i`. Sans ça, une occurrence qui commencerait avant `n` mais finirait après `n` serait trouvée à tort.
- **Le test `s2[j] == '\0'` après la boucle** : on peut sortir de la boucle interne pour 3 raisons (limite, fin de `s1`, caractère différent). Seul le cas « on a lu tout `s2` » est un succès, et c'est exactement ce que ce test vérifie.
- Complexité : O(n × taille de `s2`) dans le pire cas, c'est attendu pour l'exercice.

## Bugs / à corriger dans ton code
Aucun bug.
