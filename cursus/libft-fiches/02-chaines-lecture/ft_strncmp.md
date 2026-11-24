# ft_strncmp

**Prototype** : `int ft_strncmp(const char *s1, const char *s2, size_t n)`

## Rôle
Compare au plus `n` caractères de `s1` et `s2`. Renvoie 0 si égales, sinon la différence entre les deux premiers caractères différents.

## Ton code
```c
#include "libft.h"

int	ft_strncmp(const char *s1, const char *s2, size_t n)
{
	size_t	i;

	i = 0;
	while (n > i && (s1[i] || s2[i]))
	{
		if (s1[i] != s2[i])
			return ((unsigned char)s1[i] - (unsigned char)s2[i]);
		i++;
	}
	return (0);
}
```

## Comment ça marche
On parcourt les deux chaînes en parallèle tant qu'on n'a pas lu `n` caractères et qu'au moins une des deux n'est pas finie. Au premier écart, on renvoie la différence.

## Points complexes
- **Condition `(s1[i] || s2[i])`** : on continue tant qu'au moins une chaîne n'est pas terminée. Si les deux sont finies au même endroit, la boucle s'arrête et on renvoie 0. Si une seule est finie, `s1[i] != s2[i]` (l'une vaut 0) et on renvoie une différence non nulle.
- **Cast en `unsigned char`** : la comparaison se fait sur des octets de 0 à 255. Sans le cast, un caractère comme 'é' (octet > 127) serait négatif et l'ordre serait faux.
- Le résultat est le signe qui compte, pas la valeur exacte (selon les systèmes, le vrai `strncmp` renvoie parfois -1/0/1).

## Bugs / à corriger dans ton code
Aucun bug.
