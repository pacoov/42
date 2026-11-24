# ft_isprint

**Prototype** : `int ft_isprint(int c)`

## Rôle
Renvoie 1 si `c` est un caractère imprimable (espace compris).

## Ton code
```c
#include "libft.h"

int	ft_isprint(int i)
{
	if (i >= 32 && i <= 127)
		return (1);
	else
		return (0);
}
```

## Comment ça marche
Les caractères imprimables vont de 32 (espace) à 126 (`~`). Les codes 0 à 31 sont des caractères de contrôle (`\n`, `\t`, ...).

## Points complexes
Le code 127 est `DEL`, un caractère de contrôle : il n'est pas imprimable.

## Bugs / à corriger dans ton code
**BUG** : `i <= 127` doit être `i <= 126`. Avec ton code, `ft_isprint(127)` renvoie 1 alors que le vrai `isprint` renvoie 0.
