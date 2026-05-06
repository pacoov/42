#include <unistd.h>

void	ft_rev_int_tab(int *tab, int size)
{
	int	i;
	int	tmp;

	i = 0;
	while (i < size / 2)
	{
		tmp = tab[i];
		tab[i] = tab[size - 1 - i];
		tab[size - 1 - i] = tmp;
		i++;
	}
}

#include <stdio.h>

int	main()
{
	int	tab[] = {0, 1, 2, 3, 4, 5, 6};
	int	size = 7;
	int i = -1;
	while (++i < size)
		printf("%d ", tab[i]);

	ft_rev_int_tab(tab, size);
	printf("\n");

	i = -1;
	while (++i < size)
		printf("%d ", tab[i]);
}
