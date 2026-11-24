# ft_strchr

**Prototype** : `char *ft_strchr(const char *s, int c)`

## Rôle
Renvoie un pointeur vers la **première** occurrence de `c` dans `s`, ou `NULL`.

## Ton code
```c
#include "libft.h"

char	*ft_strchr(const char *s, int c)
{
	int	i;

	i = 0;
	while (s[i] && s[i] != (char)c)
		i++;
	if (s[i] == (char)c)
		return ((char *)&s[i]);
	return (NULL);
}
```

## Comment ça marche
La boucle avance tant qu'on n'est pas sur la fin de chaîne ni sur le caractère cherché. Après la boucle, on vérifie sur quoi on s'est arrêté : si `s[i] == (char)c`, on renvoie l'adresse `&s[i]`.

## Points complexes
- **Chercher `'\0'`** : la boucle s'arrête sur le terminateur, et `s[i] == (char)c` est vrai quand `c == 0`. On renvoie donc un pointeur vers la fin de la chaîne, comme le vrai `strchr`.
- **Le cast `(char)c`** : `c` est un `int`, mais la chaîne contient des `char`. Le standard demande de convertir `c` en `char` avant de comparer.
- **Le cast `(char *)` au retour** : `s` est `const`, la valeur de retour ne l'est pas. Le cast retire le `const` (c'est la seule façon de coller à la signature officielle).
- On renvoie un pointeur **dans** la chaîne d'origine, pas une copie : ne pas faire `free` dessus.

## Bugs / à corriger dans ton code
Aucun bug.
