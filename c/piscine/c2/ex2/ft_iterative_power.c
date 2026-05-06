#include <unistd.h>

int	ft_iterative_power(int nb, int power)
{
	int	result;

	if (power < 0)
		return (0);
	else if (power == 0)
		return (1);
	else
	{
		result = 1;
		while (power > 0)
		{
			result *= nb;
			power--;
		}
	}
	return (result);
}

#include <stdio.h>

int	main()
{
	int	a;
	a = ft_iterative_power(2, 2);
	printf("%d\n", a);
}
