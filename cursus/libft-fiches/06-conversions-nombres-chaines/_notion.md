# Notion : convertir entre nombres et chaînes

## Ce que tu dois retenir
- Un caractère chiffre n'est **pas** sa valeur : `'7'` vaut 55, et `'7' - '0'` vaut 7.
- Chaîne → nombre (`atoi`) : on lit de gauche à droite et on fait `result = result * 10 + chiffre`. C'est la **méthode de Horner**.
- Nombre → chaîne (`itoa`) : on extrait les chiffres de droite à gauche avec `% 10` puis `/ 10`, donc on **remplit le buffer à l'envers**.

## Où ça devient complexe
1. **Le signe et `INT_MIN`.** L'opposé de `-2147483648` ne tient pas dans un `int`. On passe par un type plus large.
2. **L'ordre des chiffres.** Les chiffres sortent dans l'ordre inverse de l'écriture, d'où le remplissage depuis la fin.
3. **Les cas limites** : `0`, nombre négatif, chaîne vide, espaces au début, plusieurs signes.
4. **La taille à allouer** (`itoa`) : nombre de chiffres + 1 pour le signe éventuel + 1 pour le `\0`.

## Fiches
`ft_atoi`, `ft_itoa`
