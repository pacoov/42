#include <stdio.h>

void	ft_rev_tab(int *tab, int size)
{
	int	tmp;
	int	i;

	i = 0;
	while (i < size / 2)
	{
		tmp = tab[i];
		tab[i] = tab[size - i - 1],
		tab[size - i - 1] = tmp;
		i++;
	}
}

void    ft_tabprint(int *tab, int size)
{
    int *ptr;
    int *end;

    ptr = tab;
    end = tab + size;
    while (ptr < end)
    {
        printf("%d ", *ptr);
        ptr++;
    }
    printf("\n");
}

int main(void)
{
	int tab1[] = {10, 20, 30, 40, 50};  // taille impaire
	int tab2[] = {1, 2, 3, 4};          // taille paire
	int tab3[] = {42};                   // un seul élément

	printf("avant  : ");  ft_tabprint(tab1, 5);
	ft_rev_tab(tab1, 5);
	printf("après  : ");  ft_tabprint(tab1, 5);
	printf("avant  : ");  ft_tabprint(tab2, 4);
	ft_rev_tab(tab2, 4);
	printf("après  : ");  ft_tabprint(tab2, 4);

	printf("avant  : ");  ft_tabprint(tab3, 1);
	ft_rev_tab(tab3, 1);
	printf("après  : ");  ft_tabprint(tab3, 1);

	return (0);
}
