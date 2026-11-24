# ft_isdigit

**Prototype** : `int ft_isdigit(int c)`

## Rôle
Renvoie 1 si `c` est un chiffre ('0' à '9'), 0 sinon.

## Ton code
```c
#include "libft.h"

int	ft_isdigit(int i)
{
	if (i >= '0' && i <= '9')
		return (1);
	else
		return (0);
}
```

## Comment ça marche
Un seul intervalle : '0' vaut 48 et '9' vaut 57. On compare directement avec les caractères, pas besoin d'écrire 48 et 57.

## Points complexes
Attention : on teste le **caractère** '5' (code 53), pas la valeur 5.

## Bugs / à corriger dans ton code
Aucun bug.
