# ft_lstnew

**Prototype** : `t_list *ft_lstnew(void *content)`

## Rôle
Crée un nouveau maillon (nœud) qui contient `content` et ne pointe vers rien.

## Ton code
```c
#include "libft.h"

t_list	*ft_lsnew(void *content)
{
	t_list	*res;

	res = malloc(sizeof(t_list));
	if (!res)
		return (NULL);
	res->next = NULL;
	res->content = content;
	return (res);
}
```

## Comment ça marche
On alloue un `t_list`, on range `content` dedans et on met `next` à `NULL`. Le résultat est un maillon isolé, prêt à être ajouté à une liste.

## Points complexes
- On ne copie **pas** `content` : on garde simplement le pointeur reçu. C'est l'appelant qui décide de ce que `content` pointe (une chaîne allouée, un entier, ...).
- `next = NULL` est obligatoire : sans ça, le maillon pointe vers une adresse aléatoire et la liste n'a pas de fin.

## Bugs / à corriger dans ton code
**BUG (nom)** : le fichier s'appelle `ft_lsnew.c` et la fonction `ft_lsnew` (il manque le `t`). `libft.h` déclare `ft_lstnew`, donc `ft_lstmap` et tout programme qui l'appelle échouent à l'édition de liens (`undefined reference to ft_lstnew`).

Renomme le fichier en `ft_lstnew.c` **et** la fonction en `ft_lstnew`.
