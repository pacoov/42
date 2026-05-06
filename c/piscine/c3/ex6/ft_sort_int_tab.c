#include <unistd.h>
#include <stdio.h>

void	ft_sort_int_tab(int *tab, int size)
{
	int	i;
	int	tmp;

	i = -1;
	while (++i < size - 1)
	{
		if (tab[i] > tab[i + 1])
		{
			tmp = tab[i];
			tab[i] = tab[i + 1];
			tab[i + 1] = tmp;
			i = -1;
		}
	}
}

int	main()
{
	int	tab[] = {4, 9, 2, 3, 0};
	int	size = 5;
	int	i;

	i = -1;
	while (++i < size)
		printf("%d ", tab[i]);
	
	ft_sort_int_tab(tab, size);
	printf("\n");
	i = -1;
	while (++i < size)
		printf("%d ", tab[i]);
	return 0;
}
