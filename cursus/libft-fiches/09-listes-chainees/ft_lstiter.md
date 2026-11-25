# ft_lstiter

**Prototype** : `void ft_lstiter(t_list *lst, void (*f)(void *))`

## Rôle
Applique la fonction `f` au contenu de chaque maillon, de la tête à la fin.

## Ton code
```c
#include "libft.h"

void	ft_lstiter(t_list *lst, void (*f)(void *))
{
	if (!lst)
		return ;
	while (lst)
	{
		f(lst->content);
		lst = lst->next;
	}
}
```

## Comment ça marche
On parcourt la liste et on appelle `f(lst->content)` pour chaque maillon.

## Points complexes
- `f` reçoit le **contenu**, pas le maillon. Pour modifier un contenu sur place, `f` doit modifier ce que le pointeur désigne (comme `striteri`).
- La liste n'est pas modifiée et rien n'est alloué.

## Bugs / à corriger dans ton code
Le `if (!lst) return ;` est redondant : `while (lst)` gère déjà la liste vide. Sans conséquence.
