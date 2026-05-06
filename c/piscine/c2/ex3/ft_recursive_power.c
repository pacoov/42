#include <unistd.h>

int	ft_recursive_power(int nb, int power)
{
	if (power < 0)
		return (0);
	else if (power == 0)
		return (1);
	return (nb * (ft_recursive_power(nb, power - 1)));
}

#include <stdio.h>

int	main()
{
	int	a;

	a = ft_recursive_power(2, 2);
	printf("%d\n", a);
}
