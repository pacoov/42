#include <unistd.h>

void	ft_print_numbers(void)
{
	int	nb;

	nb = 48;
	while (nb < 58)
	{
		write(1, &nb, 1);
		nb++;
	}
}

int	main()
{
	ft_print_numbers();
	return 0;
}
