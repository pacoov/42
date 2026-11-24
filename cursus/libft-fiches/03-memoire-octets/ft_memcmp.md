# ft_memcmp

**Prototype** : `int ft_memcmp(const void *s1, const void *s2, size_t n)`

## Rôle
Compare les `n` premiers octets de deux zones mémoire.

## Ton code
```c
#include "libft.h"

int	ft_memcmmp(const void *s1, const void *s2, size_t n)
{
	size_t	i;

	i = 0;
	while (i < n)
	{
		if (((unsigned char *)s1)[i] != ((unsigned char *)s2)[i])
			return (((unsigned char *)s1)[i] - ((unsigned char *)s2)[i]);
		i++;
	}
	return (0);
}
```

## Comment ça marche
Même idée que `strncmp`, mais octet par octet, sans jamais regarder le `\0`. Au premier octet différent, on renvoie la différence (en `unsigned char`).

## Points complexes
- Un `\0` au milieu n'arrête **pas** la comparaison.
- La soustraction de deux `unsigned char` se fait en `int` (promotion automatique) : pas de dépassement.

## Bugs / à corriger dans ton code
**BUG (nom)** : la fonction s'appelle `ft_memcmmp` (deux m en trop). Elle doit s'appeler `ft_memcmp` comme dans `libft.h`, sinon l'édition de liens échoue.
