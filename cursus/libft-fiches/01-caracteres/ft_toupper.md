# ft_toupper

**Prototype** : `int ft_toupper(int c)`

## Rôle
Convertit une minuscule en majuscule. Tout autre caractère est renvoyé tel quel.

## Ton code
```c
#include "libft.h"

int	ft_toupper(int c)
{
	if (c >= 'a' && c <= 'z')
		c -= 32;
	return (c);
}
```

## Comment ça marche
Dans la table ASCII, `'a'` (97) et `'A'` (65) sont séparés de 32. On retire 32 uniquement si `c` est entre 'a' et 'z'.

## Points complexes
Le `32` est un « nombre magique ». Tu peux écrire `c -= 'a' - 'A';` : c'est plus lisible et ça donne le même résultat.

On renvoie un `int` (pas un `char`) pour rester compatible avec `EOF` (-1) et avec la signature du vrai `toupper`.

## Bugs / à corriger dans ton code
Aucun bug.
