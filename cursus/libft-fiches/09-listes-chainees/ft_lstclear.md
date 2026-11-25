# ft_lstclear

**Prototype** : `void ft_lstclear(t_list **lst, void (*del)(void *))`

## Rôle
Supprime et libère **tous** les maillons de la liste, puis met la tête à `NULL`.

## Ton code
```c
#include "libft.h"

void	ft_lstclear(t_list **lst, void (*del)(void *))
{
	t_list	*tmp;

	if (!lst)
		return ;
	while (*lst)
	{
		tmp = (*lst)->next;
		ft_lstdelone(*lst, del);
		*lst = tmp;
	}
}
```

## Comment ça marche
Tant qu'il reste un maillon : on **mémorise le suivant**, on supprime le maillon courant avec `ft_lstdelone`, puis on avance sur le suivant. À la fin, `*lst` vaut `NULL`.

## Points complexes
- **C'est LE piège de la notion** : si tu supprimes le maillon avant de sauvegarder `next`, tu lis de la mémoire libérée (*use after free*). D'où `tmp = (*lst)->next;` **avant** `ft_lstdelone`.
- **Le double pointeur** : on modifie la tête de liste de l'appelant. À la fin la boucle a mis `*lst` à `NULL`, ce qui évite à l'appelant de garder un pointeur invalide.
- Réutilise `ft_lstdelone` plutôt que de réécrire `del` + `free`.

## Bugs / à corriger dans ton code
Aucun bug.
