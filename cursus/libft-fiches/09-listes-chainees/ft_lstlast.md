# ft_lstlast

**Prototype** : `t_list *ft_lstlast(t_list *lst)`

## Rôle
Renvoie le **dernier maillon** de la liste (ou `NULL` si elle est vide).

## Ton code
```c
#include "libft.h"

t_list	*ft_lstlast(t_list *lst)
{
	if (!lst)
		return (NULL);
	while (lst->next)
		lst = lst->next;
	return (lst);
}
```

## Comment ça marche
On avance tant que `lst->next` n'est pas `NULL`. Le maillon sur lequel on s'arrête est le dernier.

## Points complexes
- **S'arrêter sur le dernier maillon** : la condition est `lst->next`, pas `lst`. Avec `while (lst)`, tu renverrais toujours `NULL`.
- Le test `if (!lst)` au début protège le `lst->next` d'une liste vide.

## Bugs / à corriger dans ton code
Aucun bug.
