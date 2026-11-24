# Notion : les pointeurs sur fonctions (callbacks)

## L'idée
En C, une fonction a une adresse, comme une variable. On peut donc la passer **en argument** à une autre fonction, qui l'appelle quand elle veut. On appelle ça un **callback**. C'est la base de `qsort`, des gestionnaires de signaux, et de `ft_lstiter` / `ft_lstmap` plus tard.

## Lire la syntaxe
```
char  (*f)  (unsigned int, char)
 |     |         |
 |     |         +-- types des paramètres de la fonction pointée
 |     +------------ f est un pointeur (les parenthèses sont obligatoires)
 +------------------ type de retour de la fonction pointée
```
Sans les parenthèses, `char *f(unsigned int, char)` serait la déclaration d'une fonction qui renvoie un `char *`.

## `strmapi` vs `striteri`

| | `ft_strmapi` | `ft_striteri` |
|---|---|---|
| `f` reçoit | l'index et **une copie** du caractère | l'index et **l'adresse** du caractère |
| `f` renvoie | le nouveau caractère | rien |
| Résultat | **nouvelle** chaîne (malloc) | chaîne modifiée **sur place** |
| À libérer ? | oui | non |

## Où ça devient complexe
- La syntaxe de déclaration (voir ci-dessus).
- Comprendre **qui** modifie quoi : `strmapi` ne touche pas à `s`, `striteri` oui.
- Pour tester, il faut écrire sa propre fonction `f` dans un `main`.

## Fiches
`ft_strmapi`, `ft_striteri`
