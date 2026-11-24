# ft_itoa

**Prototype** : `char *ft_itoa(int n)`

## Rôle
Convertit un entier en chaîne allouée (`-42` → `"-42"`).

## Ton code
```c
#include "libft.h"

static	int	ft_calclen(long long nb)
{
	int	len;

	len = 1;
	while (nb >= 10)
	{
		nb /= 10;
		len++;
	}
	return (len);
}

char	*ft_itoa(int n)
{
	char	*res;
	long	nb;
	int		len;
	int		sign;

	nb = (long long)n;
	sign = (nb < 0);
	if (sign)
		nb = -nb;
	len = ft_calclen(nb) + sign;
	res = malloc(sizeof(char) * (len + 1));
	if (!res)
		return (NULL);
	res[len] = '\0';
	if (nb == 0)
		res[0] = '0';
	while (nb > 0)
	{
		res[--len] = (nb % 10) + '0';
		nb /= 10;
	}
	if (sign)
		res[0] = '-';
	return (res);
}
```

## Comment ça marche
1. Traite le signe et travaille sur la valeur absolue.
2. Calcule le nombre de chiffres (`ft_calclen`) et ajoute 1 si négatif.
3. Alloue `len + 1` et pose le `\0`.
4. Remplit **de la droite vers la gauche** avec `nb % 10`, puis `nb /= 10`.
5. Pose le `-` en position 0 si besoin.

## Points complexes
- **`INT_MIN`** : `-(-2147483648)` n'est pas représentable dans un `int`. C'est pourquoi tu copies `n` dans un type plus large (`long long`) **avant** de prendre l'opposé.
- **Remplir à l'envers** : le chiffre des unités s'obtient avec `% 10`, donc il est produit en **premier** mais doit être écrit en **dernier**. On écrit donc depuis la fin : `res[--len] = ...`.
- **Le cas 0** : la boucle `while (nb > 0)` ne s'exécute pas pour 0, d'où le traitement spécial `res[0] = '0'`. `ft_calclen` renvoie 1 pour 0, donc la taille est bonne.
- **`'0' + chiffre`** reconvertit une valeur 0-9 en caractère.
- Petit détail : `nb` est déclaré `long` mais reçoit un `long long` ; mets `long long` partout pour rester cohérent.

## Bugs / à corriger dans ton code
Aucun bug fonctionnel.
