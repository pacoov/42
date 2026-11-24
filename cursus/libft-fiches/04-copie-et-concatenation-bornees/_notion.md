# Notion : copie et concaténation bornées (`strlcpy` / `strlcat`)

## Pourquoi ces fonctions existent
`strcpy` et `strcat` n'ont aucune limite : si `dst` est trop petit, elles écrivent en dehors du buffer (**buffer overflow**, source n°1 de failles de sécurité). `strncpy` / `strncat` ont des comportements surprenants (pas de `\0` garanti pour `strncpy`). `strlcpy` et `strlcat` corrigent ça avec deux règles :
1. `dstsize` = **taille totale du buffer de destination** (pas « combien copier »).
2. Le résultat est **toujours terminé par `\0`** (dès que `dstsize > 0`).

## La valeur de retour
Les deux renvoient la longueur de la chaîne **qu'elles ont essayé de créer**. Ça permet de détecter la troncature sans deviner :

```c
if (ft_strlcpy(buf, src, sizeof(buf)) >= sizeof(buf))
    /* src a été tronquée */
```

## Où ça devient complexe
- **`n - 1` avec un `size_t`** : si `n == 0`, ça donne la valeur maximale. D'où le test `if (!n)` en premier.
- **Les cas limites de `strlcat`** : `n == 0`, `dst` déjà plein, `dst` trop long. Chacun a sa valeur de retour.
- **Garder la place du `\0`** : la condition `i + k + 1 < n` (ou `i < n - 1`) est ce qui sépare une fonction correcte d'une fonction qui déborde d'un octet.

## Fiches
`ft_strlcpy`, `ft_strlcat`
