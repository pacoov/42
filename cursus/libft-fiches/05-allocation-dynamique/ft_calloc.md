# ft_calloc

**Prototype** : `void *ft_calloc(size_t count, size_t size)`

## Rôle
Alloue `count × size` octets, tous initialisés à 0.

## Ton code
```c
#include "libft.h"

void	*ft_calloc(size_t count, size_t size)
{
	void	*res;

	if (count == 0 || size == 0)
		return (malloc(0));
	if (count > (size_t) - 1 / size)
		return (NULL);
	res = (void *)malloc(count * size);
	if (!res)
		return (NULL);
	ft_bzero(res, count * size);
	return (res);
}
```

## Comment ça marche
On protège contre le dépassement de la multiplication, on appelle `malloc(count * size)`, puis on remplit de zéros avec `ft_bzero`.

## Points complexes
- **Dépassement de `count * size`** : si le produit dépasse la taille maximale d'un `size_t`, il « boucle » et donne une petite valeur. `malloc` alloue alors un buffer trop petit et ton programme écrit dedans. Le test `count > (size_t)-1 / size` détecte ça avant de multiplier : `(size_t)-1` est la valeur maximale d'un `size_t` (tu peux écrire `SIZE_MAX` avec `<stdint.h>`, plus lisible).
- **Cas 0** : tu renvoies `malloc(0)`. C'est une réponse valide (le vrai `calloc(0, n)` renvoie un pointeur libérable ou `NULL`). Ça évite aussi la division par zéro du test précédent (c'est pour ça qu'il est placé avant).
- **Toujours vérifier `malloc`** : s'il échoue il renvoie `NULL`, et il ne faut pas appeler `ft_bzero` dessus.
- Le cast `(void *)` devant `malloc` est inutile en C.

## Bugs / à corriger dans ton code
**Dépendance manquante** : `ft_bzero` n'existe pas dans ton dossier. Sans `ft_bzero.c`, le programme ne se lie pas (`undefined reference`). Voir la notion 03 pour le code.
