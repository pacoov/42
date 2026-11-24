# Notion : manipuler la mémoire brute (octets)

## Ce que tu dois retenir
- Les fonctions `mem*` travaillent sur des **octets**, pas sur des chaînes : elles ignorent `'\0'` et prennent toujours une taille `n` explicite.
- `void *` = « pointeur vers n'importe quoi ». On ne peut ni le déréférencer, ni faire `p[i]`, ni `p + 1` proprement. **On le caste donc toujours** en `(unsigned char *)` avant de s'en servir.
- `n` est un nombre d'**octets**. Pour N éléments de type T : `N * sizeof(T)`.

## Le point le plus difficile : le chevauchement (`memcpy` vs `memmove`)
Si la destination et la source partagent des octets, l'ordre de copie compte. Voir la fiche `ft_memmove` pour le schéma. Résumé :

| Situation | Sens de copie sûr |
|---|---|
| `dst < src` | de gauche à droite |
| `dst > src` | de droite à gauche |
| zones disjointes | n'importe lequel |

`memcpy` ne garantit rien si ça se chevauche. `memmove` garantit le bon résultat.

## Autres pièges
- `memset` écrit **octet par octet** : `memset(tab, 1, ...)` ne met pas des `int` à 1.
- `memcmp` compare en `unsigned char`, comme `strncmp`.
- Un `size_t` ne peut pas être négatif : une boucle `while (i >= 0)` sur un `size_t` est infinie. On préfère `while (n > 0) { n--; ... }`.

## Fonction manquante dans ton dossier
`ft_bzero` est déclarée dans `libft.h` et utilisée par `ft_calloc`, mais il n'y a pas de `ft_bzero.c`. Elle équivaut à `ft_memset(s, 0, n)` sans valeur de retour :

```c
void	ft_bzero(void *s, size_t n)
{
	ft_memset(s, 0, n);
}
```

## Fiches
`ft_memset`, `ft_memchr`, `ft_memcmp`, `ft_memcpy`, `ft_memmove`
