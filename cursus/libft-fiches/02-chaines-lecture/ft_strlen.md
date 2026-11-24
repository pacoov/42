# ft_strlen

**Prototype** : `size_t ft_strlen(const char *s)   (dans ton repo : int ft_strlen(char *str))`

## Rôle
Renvoie le nombre de caractères avant le `\0` final.

## Ton code
```c
#include "libft.h"

int	ft_strlen(char *str)
{
	int	i;

	i = 0;
	while (str[i])
		i++;
	return (i);
}
```

## Comment ça marche
On avance un compteur tant que `str[i]` n'est pas `'\0'`. Le `\0` n'est pas compté.

## Points complexes
C'est la fonction la plus utilisée de la libft. Si son prototype est faux, **toutes** les fonctions qui l'appellent produisent des warnings (donc des erreurs avec `-Werror`).

## Bugs / à corriger dans ton code
**BUG (prototype)** : le vrai `strlen` est `size_t strlen(const char *s)`.

- Sans `const`, chaque appel avec un `const char *` (dans `ft_strdup`, `ft_strjoin`, `ft_substr`, `ft_strlcpy`...) donne `discards 'const' qualifier` : erreur avec `-Werror`.
- Avec `int`, les comparaisons avec des `size_t` donnent `-Wsign-compare`.

Corrige la fonction **et** `libft.h` :

```c
size_t	ft_strlen(const char *s)
{
	size_t	i;

	i = 0;
	while (s[i])
		i++;
	return (i);
}
```

Si tu passes `i` en `size_t` dans `ft_strrchr`, attention au piège de la boucle descendante (voir cette fiche).
