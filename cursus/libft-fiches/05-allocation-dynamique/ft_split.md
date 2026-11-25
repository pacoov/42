# ft_split

**Prototype** : `char **ft_split(char const *s, char c)`

## Rôle
Découpe `s` en mots séparés par le caractère `c`. Renvoie un tableau de chaînes allouées, terminé par `NULL`.

## Ton code
```c
#include "libft.h"

static int	is_sep(char c1, char c2)
{
	return (c1 == c2);
}

static size_t	count_mots(char *str, char c)
{
	size_t	i;
	size_t	count;

	count = 0;
	i = 0;
	while (str[i])
	{
		if (is_sep(str[i], c) == 0
			&& (i == 0 || is_sep(str[i - 1], c) != 0))
			count++;
		i++;
	}
	return (count);
}

static char	*copy_word(char *str, char c, size_t *i)
{
	size_t	j;
	char	*word;

	j = *i;
	while (str[j] && is_sep(str[j], c) == 0)
		j++;
	word = malloc(sizeof(char) * (j - *i + 1));
	if (!word)
		return (NULL);
	j = 0;
	while (str[*i] && is_sep(str[*i], c) == 0)
		word[j++] = str[(*i)++];
	word[j] = '\0';
	return (word);
}

static void	free_tab(char **tab, size_t k)
{
	while (k > 0)
		free(tab[--k]);
	free(tab);
}

char	**ft_split(char const *s, char c)
{
	size_t	i;
	size_t	k;
	char	**tab;

	i = 0;
	k = 0;
	if (!s)
		return (NULL);
	tab = malloc(sizeof(char *) * (count_mots((char *)s, c) + 1));
	if (!tab)
		return (NULL);
	while (s[i])
	{
		while (s[i] && is_sep(s[i], c) != 0)
			i++;
		if (!s[i])
			break ;
		tab[k] = copy_word((char *)s, c, &i);
		if (!tab[k++])
			return (free_tab(tab, k), NULL);
	}
	tab[k] = 0;
	return (tab);
}
```

## Comment ça marche
On travaille en deux temps : on **compte** les mots pour allouer le tableau, puis on **extrait** les mots un par un.

- `is_sep` : vrai si les deux caractères sont égaux.
- `count_mots` : un mot commence à chaque caractère qui n'est pas un séparateur et dont le précédent en est un (ou qui est en position 0).
- `copy_word` : mesure le mot qui commence à `*i`, alloue `longueur + 1`, le copie, et **fait avancer `*i`** jusqu'à la fin du mot.
- `free_tab` : libère les `k` premiers mots puis le tableau.
- `ft_split` : saute les séparateurs, sort si la chaîne est finie, sinon appelle `copy_word` et range le mot dans `tab[k]`.

Trace pour `"ab c"` avec `' '` (2 mots, tableau de 3 cases) :

```
i=0 : pas de séparateur à sauter -> copy_word : "ab", i passe à 2 ; tab[0]="ab", k=1
i=2 : ' ' sauté -> i=3 -> copy_word : "c", i passe à 4 ; tab[1]="c", k=2
i=4 : s[4] == 0, la boucle s'arrête
tab[2] = NULL
```

## Points complexes
- **Le pointeur `size_t *i`** : `copy_word` modifie l'indice de `ft_split` (via `(*i)++`). C'est ce qui permet à la boucle principale de repartir juste après le mot copié, sans recompter.
- **Deux parcours dans `copy_word`** : le premier (avec `j`) mesure le mot pour allouer la bonne taille, le second recopie. `j` est réutilisé ensuite comme index d'écriture dans `word`.
- **`if (!s[i]) break ;`** : après avoir sauté les séparateurs, on peut être arrivé à la fin (chaîne qui finit par des séparateurs). Sans ce test, on créerait un mot vide.
- **`if (!tab[k++])`** : `k` est incrémenté **avant** l'appel à `free_tab`. Donc `free_tab(tab, k)` libère les cases `k-1` à `0`, y compris la case ratée, qui vaut `NULL` (`free(NULL)` est sans danger). Si tu enlèves le `k++` de cette ligne, tu dois adapter `free_tab` et l'incrément.
- **`free_tab` avec `size_t`** : `while (k > 0) free(tab[--k]);` évite le piège du `size_t` qui ne descend jamais sous 0.
- **Le `NULL` final** : `tab[k] = 0;` pose la sentinelle après le dernier mot. Le tableau a `mots + 1` cases, donc ça tient toujours.
- **Cas limites gérés** : `s == NULL`, chaîne vide, que des séparateurs, séparateurs au début/fin ou consécutifs (pas de mot vide).

## Bugs / à corriger dans ton code
Aucun bug : compilé avec `-Wall -Wextra -Werror`, testé sous AddressSanitizer sur plusieurs cas et avec un échec de `malloc` à chaque position (jamais de fuite).

Deux améliorations facultatives :
- `is_sep` n'apporte rien : `s[i] == c` est plus direct.
- Les casts `(char *)s` sont inutiles si `count_mots` et `copy_word` prennent un `char const *`.
