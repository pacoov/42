# ft_strlen

**Prototype** : `size_t ft_strlen(const char *s)   (dans ton repo : int ft_strlen(char *str))`

## Rôle
Renvoie le nombre de caractères avant le `\0` final.

## Ton code
```c
#include "libft.h"

size_t	ft_strlen(const char *str)
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
✓ **Prototype corrigé** (`size_t ft_strlen(const char *)`, dans le .c et dans `libft.h`). Les warnings `const` ont disparu.

Il reste un détail : le compteur `i` est un `int` alors que la fonction renvoie un `size_t`. Ça marche, mais pour une chaîne de plus de 2 milliards de caractères `i` déborderait. Le plus propre :

```c
size_t	i;
```
