# ft_atoi

**Prototype** : `int ft_atoi(const char *str)`

## Rôle
Convertit le début d'une chaîne en entier (`"  -42abc"` → `-42`).

## Ton code
```c
#include "libft.h"

int	ft_atoi(const char *str)
{
	int	i;
	int	result;
	int	sign;

	i = 0;
	sign = 1;
	result = 0;
	while (str[i] == ' ' || (str[i] >= 9 && str[i] <= 13))
		i++;
	if (str[i] == '+' || str[i] == '-')
	{
		if (str[i] == '-')
			sign = -sign;
		i++;
	}
	while (str[i] >= '0' && str[i] <= '9')
	{
		result = result * 10 + (str[i] - '0');
		i++;
	}
	return (result * sign);
}
```

## Comment ça marche
1. Saute les espaces au début.
2. Lit **un seul** signe `+` ou `-`.
3. Lit les chiffres tant qu'il y en a et construit le nombre.
4. Applique le signe.

## Points complexes
- **Les espaces** : `' '` mais aussi les codes 9 à 13 (`\t \n \v \f \r`). C'est ce que fait `isspace`.
- **Construire le nombre** : `result = result * 10 + (str[i] - '0')`. On décale d'un rang décimal puis on ajoute le nouveau chiffre. Pour `"123"` : 0 → 1 → 12 → 123. `str[i] - '0'` transforme le caractère '7' (55) en la valeur 7.
- **Un seul signe** : `"--42"`, `"+-42"` donnent 0, car après le premier signe la boucle de chiffres s'arrête sur le 2e signe.
- **S'arrête au premier caractère non numérique** : `"42abc"` donne 42, `"abc42"` donne 0.
- **Débordement** : un `int` ne contient pas `2147483648`. Le comportement du vrai `atoi` est indéfini dans ce cas, donc la moulinette ne le teste pas. En revanche `"-2147483648"` est un cas à connaître : on calcule d'abord `+2147483648` (qui dépasse `INT_MAX`) avant d'appliquer le signe. Ça marche en pratique mais c'est du comportement indéfini. Pour être propre, accumule dans un `long`.

## Bugs / à corriger dans ton code
Aucun bug pour les tests de la moulinette. Le `main` de test commenté en bas du fichier est une bonne habitude : garde-le.
