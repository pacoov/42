# ft_lstadd_back

**Prototype** : `void ft_lstadd_back(t_list **lst, t_list *new)`

## Rôle
Ajoute le maillon `new` **à la fin** de la liste.

## Ton code
```c
#include "libft.h"

void	ft_lstadd_back(t_list **lst, t_list *new)
{
	t_list	*current;

	if (!*lst)
	{
		*lst = new;
		return ;
	}
	current = *lst;
	while (current->next)
		current = current->next;
	current->next = new;
}
```

## Comment ça marche
Si la liste est vide, `new` devient la tête. Sinon, on parcourt jusqu'au dernier maillon (celui dont `next` vaut `NULL`) et on y accroche `new`.

## Points complexes
- **Deux cas** : liste vide (on modifie `*lst`, d'où le double pointeur) et liste non vide (on modifie le `next` du dernier maillon, le double pointeur ne sert plus).
- **La condition d'arrêt `current->next`** : on s'arrête **sur** le dernier maillon, pas après. Si tu écris `while (current)`, tu finis sur `NULL` et tu ne peux plus rien accrocher.
- Tu peux remplacer la boucle par `ft_lstlast(*lst)`.

## Bugs / à corriger dans ton code
Robustesse : `if (!*lst)` lit `*lst` sans vérifier que `lst` n'est pas `NULL`. `ft_lstadd_back(NULL, x)` provoque un segfault (je l'ai testé). Ajoute `if (!lst || !new) return ;` comme dans `ft_lstadd_front`. Mineur : la moulinette ne teste pas ce cas.
