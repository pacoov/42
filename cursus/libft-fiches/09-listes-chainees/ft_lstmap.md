# ft_lstmap

**Prototype** : `t_list *ft_lstmap(t_list *lst, void *(*f)(void *), void (*del)(void *))`

## Rôle
Crée une **nouvelle liste** dont chaque contenu est le résultat de `f` appliquée au contenu du maillon correspondant. La liste d'origine n'est pas modifiée.

## Ton code
```c
#include "libft.h"

t_list	*ft_lstmap(t_list *lst, void *(*f)(void *), void (*del)(void *))
{
	t_list	*new_lst;
	t_list	*new_node;

	if (!lst)
		return (NULL);
	new_lst = NULL;
	while (lst)
	{
		new_node = ft_lstnew(f(lst->content));
		if (!new_node)
		{
			ft_lstclear(&new_lst, del);
			return (NULL);
		}
		ft_lstadd_back(&new_lst, new_node);
		lst = lst->next;
	}
	return (new_lst);
}
```

## Comment ça marche
Pour chaque maillon : on calcule `f(content)`, on en fait un nouveau maillon avec `ft_lstnew`, et on l'ajoute à la fin de la nouvelle liste. Si une allocation échoue, on libère tout ce qui a été créé et on renvoie `NULL`.

## Points complexes
- **Pourquoi `del`** : si l'allocation d'un maillon échoue au milieu, il faut libérer les maillons **déjà créés**, y compris leurs contenus (que `f` a alloués). `ft_lstclear(&new_lst, del)` s'en charge.
- **Initialiser `new_lst = NULL`** : sinon `ft_lstadd_back` parcourrait une adresse aléatoire.
- **Complexité** : `ft_lstadd_back` reparcourt la liste à chaque ajout, donc O(n²). Pour une liste de 10 000 éléments, c'est lent. Une version plus rapide garde un pointeur sur la queue. Pas obligatoire pour la libft.

## Bugs / à corriger dans ton code
**BUG (fuite mémoire)** : dans

```c
new_node = ft_lstnew(f(lst->content));
if (!new_node)
{
	ft_lstclear(&new_lst, del);
	return (NULL);
}
```

si `ft_lstnew` échoue, le résultat de `f(...)` (alloué) n'est stocké nulle part et n'est jamais libéré. Garde-le dans une variable :

```c
content = f(lst->content);
new_node = ft_lstnew(content);
if (!new_node)
{
	del(content);
	ft_lstclear(&new_lst, del);
	return (NULL);
}
```

Il te faudra une variable de plus (`void *content;`). Ce bug n'apparaît que lorsqu'un `malloc` échoue, donc il est rare en pratique mais la moulinette peut le tester.

(Cette fonction appelle `ft_lstnew` : elle ne se liera qu'une fois le fichier `ft_lsnew.c` renommé.)
