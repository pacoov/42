#include <unistd.h>

void	ft_combn_recc(int n, char *tab, int index, int unit)
{
	if (index == n)
	{
		write(1, tab, n);
		if (tab[0] < (':' - n))
			write(1, ", ", 2);
		return ;
	}
	while (unit < 10)
	{
		tab[index] = unit + 48;
		ft_combn_recc(n, tab, index + 1, unit + 1);
		unit++;
	}
}

void	ft_print_combn(int n)
{
	char	tab[10];

	if (n > 0 && n < 10)
		ft_combn_recc(n, tab, 0, 0);
	return ;
}

int	main(void)
{
	ft_print_combn(5);
	return (0);
}
