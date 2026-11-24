# ft_putnbr_fd

**Prototype** : `void ft_putnbr_fd(int n, int fd)`

## Rôle
Écrit l'entier `n` en décimal sur `fd`.

## Ton code
```c
#include "libft.h"

void	ft_putnbr_fd(int i, int fd)
{
	char	c;
	long	nb;

	nb = i;
	if (nb < 0)
	{
		write(fd, "-", 1);
		nb = -nb;
	}
	if (nb > 9)
		ft_putnbr_fd(nb / 10, fd);
	c = nb % 10 + '0';
	write(fd, &c, 1);
}
```

## Comment ça marche
1. Si négatif, écrit `-` et passe à la valeur positive.
2. Si le nombre a plus d'un chiffre, s'appelle elle-même sur `nb / 10` (tous les chiffres sauf le dernier).
3. Écrit le dernier chiffre : `nb % 10 + '0'`.

## Points complexes
- **La récursivité** est le point difficile. Pour `42` :

```
putnbr(42)  42 > 9  -> appelle putnbr(4)
  putnbr(4)   4 > 9 faux  -> écrit '4'   (retourne)
  écrit '2'
=> affiche "42"
```

  Les appels les plus profonds écrivent les chiffres de **gauche**, les appels extérieurs écrivent ceux de **droite** : l'ordre est le bon sans avoir à inverser quoi que ce soit.
- **Condition d'arrêt** : `nb > 9`. Sans elle, la récursion ne finit jamais.
- **`INT_MIN`** : comme pour `itoa`, on copie dans un `long` avant de faire `-nb`.
- Profondeur maximale : 10 appels (un `int` a au plus 10 chiffres).

## Bugs / à corriger dans ton code
Aucun bug.
