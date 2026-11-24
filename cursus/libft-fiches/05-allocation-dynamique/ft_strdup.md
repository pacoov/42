# ft_strdup

**Prototype** : `char *ft_strdup(const char *s1)`

## Rôle
Renvoie une **copie** de `s1` allouée avec `malloc`.

## Ton code
```c
#include "libft.h"

char	*ft_strdup(const char *s)
{
	char	*res;
	int		i;

	if (!s)
		return (NULL);
	i = 0;
	res = malloc(sizeof(char) * ft_strlen(s) + 1);
	if (!res)
		return (NULL);
	while (s[i])
	{
		res[i] = s[i];
		i++;
	}
	res[i] = '\0';
	return (res);
}
```

## Comment ça marche
On alloue `strlen + 1` octets (le `+1` est pour le `\0`), on copie caractère par caractère, on termine par `\0`.

## Points complexes
- **`+1`** : oublier le `\0` est l'erreur classique. Ta ligne `sizeof(char) * ft_strlen(s) + 1` fonctionne car `*` passe avant `+`, mais la forme `sizeof(char) * (ft_strlen(s) + 1)` est plus claire.
- **Propriété de la mémoire** : le résultat doit être libéré avec `free` par l'appelant. Sinon : fuite mémoire.
- Le `if (!s) return (NULL)` est un garde-fou de ta part : le vrai `strdup(NULL)` plante.
- Tu pourrais remplacer la boucle par `ft_memcpy` ou `ft_strlcpy`.

## Bugs / à corriger dans ton code
Dépend de `ft_strlen` : tant que son prototype n'est pas `size_t ft_strlen(const char *)`, tu auras un warning `const` ici.
