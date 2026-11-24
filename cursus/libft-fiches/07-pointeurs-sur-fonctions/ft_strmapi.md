# ft_strmapi

**Prototype** : `char *ft_strmapi(char const *s, char (*f)(unsigned int, char))`

## Rôle
Crée une **nouvelle** chaîne en appliquant `f(index, caractère)` à chaque caractère de `s`.

## Ton code
```c
#include "libft.h"

char	*ft_strmapi(char const *s, char (*f)(unsigned int, char))
{
	char			*res;
	unsigned int	i;

	res = malloc(sizeof(char) * (ft_strlen(s) + 1));
	if (!res)
		return (NULL);
	i = 0;
	while (s[i])
	{
		res[i] = (*f)(i, s[i]);
		i++;
	}
	res[i] = '\0';
	return (res);
}
```

## Comment ça marche
On alloue une chaîne de même longueur. Pour chaque `i`, on stocke dans `res[i]` ce que renvoie `f(i, s[i])`.

## Points complexes
- **Le type `char (*f)(unsigned int, char)`** se lit : « `f` est un pointeur vers une fonction qui prend un `unsigned int` et un `char`, et renvoie un `char` ». Les parenthèses autour de `*f` sont obligatoires, sinon ce serait une fonction qui renvoie un `char *`.
- On appelle `f` avec `(*f)(i, s[i])` ou simplement `f(i, s[i])` : c'est équivalent.
- `s` n'est **pas modifiée** (elle est `const`) : le résultat est une copie transformée, à libérer par l'appelant.
- Exemple d'utilisation :

```c
char	up_if_even(unsigned int i, char c)
{
	if (i % 2 == 0)
		return (ft_toupper(c));
	return (c);
}
/* ft_strmapi("abcdef", up_if_even) -> "AbCdEf" */
```

## Bugs / à corriger dans ton code
Pas de test `if (!s || !f)` : un `NULL` ferait planter. À ajouter si tu veux être robuste.
