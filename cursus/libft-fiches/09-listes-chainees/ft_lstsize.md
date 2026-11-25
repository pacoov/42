# ft_lstsize

**Prototype** : `int ft_lstsize(t_list *lst)   (dans ton repo : unsigned int)`

## Rôle
Renvoie le nombre de maillons de la liste.

## Ton code
```c
#include "libft.h"

unsigned int	ft_lstsize(t_list *lst)
{
	unsigned int	i;

	i = 0;
	while (lst)
	{
		lst = lst->next;
		i++;
	}
	return (i);
}
```

## Comment ça marche
On avance de maillon en maillon avec un compteur jusqu'à `NULL`.

## Points complexes
- Sur liste vide (`lst == NULL`), la boucle ne tourne pas et on renvoie 0.
- On modifie le paramètre local `lst` pour avancer : ça ne change pas la liste de l'appelant (on a copié le pointeur).

## Bugs / à corriger dans ton code
Le sujet demande un retour de type `int`. Ton `unsigned int` fonctionne, mais s'écarte du prototype officiel : un test qui compare le résultat à un `int` négatif ou qui utilise le prototype du sujet peut râler. Le plus sûr est de suivre le sujet : `int ft_lstsize(t_list *lst)`. Le doublon dans `libft.h` est corrigé ✓.
