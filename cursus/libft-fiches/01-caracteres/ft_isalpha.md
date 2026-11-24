# ft_isalpha

**Prototype** : `int ft_isalpha(int c)`

## Rôle
Renvoie 1 si `c` est une lettre (a-z ou A-Z), 0 sinon.

## Ton code
```c
#include "libft.h"

int	ft_isalpha(int i)
{
	if ((i >= 'a' && i >= 'z') || (i >= 'A' && i <= 'Z'))
		return (1);
	else
		return (0);
}
```

## Comment ça marche
On teste deux intervalles de la table ASCII : les majuscules (65 à 90) et les minuscules (97 à 122). Les deux tests sont reliés par un `||`.

## Points complexes
Rien de difficile, mais c'est la fonction où l'on se trompe le plus facilement sur un sens de comparaison.

## Bugs / à corriger dans ton code
**BUG** : `i >= 'z'` doit être `i <= 'z'`. Avec ton code, `'a'` à `'y'` renvoient 0 et `'z'`, `'{'`, `'~'`... renvoient 1.

```c
if ((i >= 'a' && i <= 'z') || (i >= 'A' && i <= 'Z'))
```
