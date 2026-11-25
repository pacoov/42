# ft_lstdelone

**Prototype** : `void ft_lstdelone(t_list *lst, void (*del)(void *))`

## Rôle
Libère **un seul maillon** : son contenu (avec `del`) puis le maillon lui-même.

## Ton code
```c
#include "libft.h"

void	ft_lstdelone(t_list *lst, void (*del)(void *))
{
	if (!lst)
		return ;
	del(lst->content);
	free(lst);
}
```

## Comment ça marche
On appelle `del(lst->content)` pour libérer ce que le maillon contient, puis `free(lst)` pour libérer le maillon.

## Points complexes
- **Deux niveaux de mémoire** : le maillon (alloué par `ft_lstnew`) et son contenu (alloué par l'appelant). `free(lst)` seul fuirait le contenu. `del` est la fonction que fournit l'appelant pour le libérer (souvent `free`).
- **L'ordre** : on libère d'abord le contenu, puis le maillon. Après `free(lst)`, `lst->content` n'est plus accessible.
- Cette fonction **ne relie pas** les maillons voisins : elle ne s'occupe que d'un seul.

## Bugs / à corriger dans ton code
Robustesse : si `del` vaut `NULL`, `del(lst->content)` plante. Ajoute `|| !del` au test si tu veux un garde-fou.
