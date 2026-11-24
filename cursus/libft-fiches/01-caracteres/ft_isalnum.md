# ft_isalnum

**Prototype** : `int ft_isalnum(int c)`

## Rôle
Renvoie 1 si `c` est une lettre ou un chiffre.

## Ton code
```c
#include "libft.h"

int	ft_isalnum(int i)
{
	if (ft_isalpha(i) || ft_isdigit(c))
		return (1);
	return (0);
}
```

## Comment ça marche
Composition de deux fonctions déjà écrites : `ft_isalpha(c) || ft_isdigit(c)`. C'est le principe de la libft : on réutilise ses propres briques.

## Points complexes
Cette fonction dépend de `ft_isalpha` : si `ft_isalpha` est fausse, `ft_isalnum` l'est aussi.

## Bugs / à corriger dans ton code
**BUG (erreur de compilation)** : le paramètre s'appelle `i` mais tu utilises `c` dans `ft_isdigit(c)`.

```c
if (ft_isalpha(i) || ft_isdigit(i))
```

Le plus simple est de nommer le paramètre `c` partout, comme dans `libft.h`.
