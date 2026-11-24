# ft_striteri

**Prototype** : `void ft_striteri(char *s, void (*f)(unsigned int, char *))`

## Rôle
Applique `f(index, &caractère)` à chaque caractère de `s`, **en modifiant `s` sur place**.

## Ton code
```c
#include "libft.h"

void	ft_striteri(char *s, void (*f)(unsigned int, char *))
{
	unsigned int	i;

	i = 0;
	while (s[i])
	{
		(*f)(i, &s[i]);
		i++;
	}
}
```

## Comment ça marche
Même parcours que `ft_strmapi`, mais sans allocation : on passe l'**adresse** du caractère pour que `f` puisse le modifier.

## Points complexes
- **Différence avec `strmapi`** : ici `f` reçoit un `char *` (l'adresse `&s[i]`) et ne renvoie rien. C'est la seule manière de modifier le caractère d'origine.
- Rien n'est alloué, donc rien à libérer.
- Exemple :

```c
void	maj(unsigned int i, char *c)
{
	(void)i;
	*c = ft_toupper(*c);
}
```

## Bugs / à corriger dans ton code
Pas de test `NULL` sur `s` ou `f`.
