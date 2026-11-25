# ft_lstadd_front

**Prototype** : `void ft_lstadd_front(t_list **lst, t_list *new)`

## Rôle
Ajoute le maillon `new` **au début** de la liste.

## Ton code
```c
#include "libft.h"

void	ft_lstadd_front(t_list **lst, t_list *new)
{
	if (!lst || !new)
		return ;
	new->next = *lst;
	*lst = new;
}
```

## Comment ça marche
1. Le nouveau maillon pointe vers l'ancien premier maillon (`new->next = *lst`).
2. La tête de liste devient le nouveau maillon (`*lst = new`).

```
avant :  *lst -> [B] -> [C]
étape 1 : new=[A] -> [B] -> [C]
étape 2 : *lst -> [A] -> [B] -> [C]
```

## Points complexes
- **Pourquoi `t_list **lst` (double pointeur)** : on doit **modifier la variable qui contient la tête**. Avec un simple `t_list *lst`, on modifierait une copie locale et l'appelant ne verrait rien. Un `t_list **` donne l'adresse de cette variable.
- **L'ordre compte** : si tu fais `*lst = new` en premier, tu perds l'ancienne tête avant de l'avoir rattachée.
- Liste vide : `*lst` vaut `NULL`, donc `new->next = NULL` et `*lst = new`. Ça marche sans cas particulier.

## Bugs / à corriger dans ton code
Aucun bug.
