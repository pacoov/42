#include <unistd.h>

int	ft_iterative_factorial(int nb)
{
	int	result;

	result = 1;
	if (nb <= 0)
		return (0);
	while (nb > 0)
	{
		result *= nb;
		nb--;
	}
	return (result);
}

#include <stdio.h>
int	main(int argc, char **argv)
{
	int	a;

	if (argc == 2)
	{
		a = ft_iterative_factorial(*argv[1] - 48);
		printf("%d\n", a);
	}
}
