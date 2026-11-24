# ft_strjoin

**Prototype** : `char *ft_strjoin(char const *s1, char const *s2)`

## Rôle
Renvoie une nouvelle chaîne qui est la concaténation de `s1` puis `s2`.

## Ton code
```c
#include "libft.h"

char	*ft_strjoin(char const *s1, char const *s2)
{
	char	*res;

	int (i) = 0;
	int (j) = 0;
	if (!s1 || !s2)
		return (NULL);
	res = malloc(sizeof(char) * (ft_strlen(s1) + ft_strlen(s2) + 1));
	if (!res)
		return (NULL);
	while (s1[i])
	{
		res[j] = s1[i];
		i++;
		j++;
	}
	i = 0;
	while (s2[i])
	{
		res[j] = s2[i];
		i++;
		j++;
	}
	res[j] = '\0';
	return (res);
}
```

## Comment ça marche
On alloue `len1 + len2 + 1`, on recopie `s1` puis `s2` à la suite avec un index d'écriture `j` qui ne revient jamais à 0, puis on pose le `\0`.

## Points complexes
- **Deux index** : `i` lit dans la source courante et est remis à 0 pour `s2`, alors que `j` écrit dans `res` du début à la fin. Si tu utilises un seul index, tu écrases la première partie.
- La taille doit être calculée **avant** le `malloc`.
- **Norme 42** : `int (i) = 0;` (parenthèses) est une astuce pour initialiser à la déclaration. La norminette interdit normalement l'initialisation à la déclaration : à vérifier de ton côté, et le plus sûr est de déclarer puis d'affecter sur deux lignes.

## Bugs / à corriger dans ton code
Aucun bug. Même remarque sur `ft_strlen`.
