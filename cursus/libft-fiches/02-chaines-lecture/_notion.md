# Notion : lire et parcourir des chaînes de caractères

## Ce que tu dois retenir
- Une chaîne C est un **tableau de `char` terminé par `'\0'`**. Il n'y a pas de longueur stockée : on la retrouve en parcourant jusqu'au `\0`.
- `const char *` veut dire « je ne modifierai pas ce que ce pointeur désigne ». Les fonctions de recherche ne modifient rien.
- Les fonctions de recherche renvoient un pointeur **dans** la chaîne d'origine (pas une copie) ou `NULL`.

## Où ça devient complexe
1. **`const` à l'entrée, non-`const` à la sortie.** `strchr`, `strrchr` et `strnstr` prennent un `const char *` mais renvoient un `char *`. Il faut donc caster `(char *)` au retour. C'est une particularité historique de l'API C, pas une erreur.
2. **`int c` converti en `char`.** On passe un `int` pour être compatible avec le vrai `strchr`, mais on compare à `(char)c`.
3. **`unsigned char` pour comparer.** `strncmp` compare des octets. Un `char` peut être signé : sans `(unsigned char)`, les octets > 127 deviennent négatifs.
4. **`size_t` ne descend jamais en dessous de 0.** Une boucle `while (i >= 0)` avec `i` de type `size_t` ne finit jamais. D'où le `int i` dans `ft_strrchr`.
5. **Le `'\0'` est une vraie position.** Chercher `'\0'` avec `strchr` doit renvoyer la fin de la chaîne.

## Fiches
`ft_strlen`, `ft_strchr`, `ft_strrchr`, `ft_strncmp`, `ft_strnstr`
