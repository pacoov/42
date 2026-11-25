# Notion : les listes chaînées

## L'idée
Un tableau range ses éléments côte à côte en mémoire. Une **liste chaînée** range chaque élément dans un **maillon** séparé (alloué avec `malloc`), et chaque maillon contient l'adresse du suivant :

```
*lst
  |
  v
[content|next] -> [content|next] -> [content|next] -> NULL
```

```c
typedef struct s_list
{
    void            *content;   /* la donnée, de n'importe quel type */
    struct s_list   *next;      /* le maillon suivant, NULL à la fin */
}   t_list;
```

La liste est **entièrement décrite par un pointeur sur son premier maillon** (la tête). Une liste vide est simplement un pointeur `NULL`.

## Où ça devient complexe
1. **Le double pointeur `t_list **lst`.** Quand une fonction peut changer *quel maillon est la tête* (`add_front`, `add_back` sur liste vide, `clear`), elle doit modifier la variable de l'appelant. En C, on passe donc l'**adresse** de cette variable : `t_list **`. Les fonctions qui ne changent pas la tête (`size`, `last`, `iter`, `delone`) prennent un simple `t_list *`.
2. **Qui libère quoi.** Chaque maillon a deux blocs mémoire : le maillon et son `content`. Seul l'appelant sait libérer le contenu : il fournit `del`. `ft_lstdelone` appelle `del(content)` **puis** `free(maillon)`.
3. **Sauvegarder `next` avant de libérer** (`ft_lstclear`). Lire `lst->next` après `free(lst)` est un *use after free*.
4. **Les cas limites** : liste vide (`NULL`), un seul maillon, ajout en fin sur liste vide.
5. **L'échec d'allocation au milieu d'une construction** (`ft_lstmap`) : il faut libérer tout ce qui a été créé *et* le résultat de `f` qui n'a pas pu être rangé.

## Fiches
`ft_lstnew`, `ft_lstadd_front`, `ft_lstadd_back`, `ft_lstsize`, `ft_lstlast`, `ft_lstdelone`, `ft_lstclear`, `ft_lstiter`, `ft_lstmap`
