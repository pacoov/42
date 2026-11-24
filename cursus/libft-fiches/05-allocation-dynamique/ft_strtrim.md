# ft_strtrim

**Prototype** : `char *ft_strtrim(char const *s1, char const *set)`

## Rôle
Renvoie une copie de `s1` sans les caractères de `set` au début ni à la fin.

## Ton code
```c
#include "libft.h"

static	int	is_set(const char *set, char c)
{
	int	i;

	i = 0;
	while (set[i])
	{
		if (set[i] == c)
			return (1);
		i++;
	}
	return (0);
}

char	*ft_strtrim(char const *s1, char const *set)
{
	char	*res;
	int		start;
	int		end;
	int		i;

	if (!s1 || !set)
		return (NULL);
	start = 0;
	while (s1[start] && is_set(set, s1[start]))
		start++;
	end = ft_strlen(s1);
	while (end > start && is_set(set, s1[end - 1]))
		end--;
	res = malloc(sizeof(char) * (end - start + 1));
	if (!res)
		return (NULL);
	i = 0;
	while (start < end)
		res[i++] = s1[start++];
	res[i] = '\0';
	return (res);
}
```

## Comment ça marche
1. On avance `start` tant que `s1[start]` est dans `set`.
2. On recule `end` (qui part de la fin) tant que `s1[end - 1]` est dans `set`.
3. On copie la partie `[start, end)`.

## Points complexes
- **`end > start`** dans la 2e boucle : si `s1` ne contient que des caractères de `set` (ex. `"   "` avec `" "`), `start` atteint la fin, `end` ne recule pas en dessous de `start`, et la longueur vaut 0. Résultat : une chaîne vide (allouée), pas un plantage.
- **`s1[end - 1]`** et non `s1[end]` : `end` est un index *exclusif* (il pointe après le dernier caractère à garder). `s1[end]` serait le `\0`.
- **`is_set` en `static`** : fonction utilitaire visible uniquement dans ce fichier. Utile pour ne pas polluer la libft et respecter la limite de fonctions par fichier de la norme.
- **Seuls les bords** sont retirés : `"  a b  "` donne `"a b"`, l'espace du milieu reste.

## Bugs / à corriger dans ton code
Aucun bug.
