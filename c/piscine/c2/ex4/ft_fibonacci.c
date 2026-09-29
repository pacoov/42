#include <unistd.h>

int	ft_fibonacci(int index)
{
	if (index < 0)
		return (-1);
	else if (index == 0)
		return (0);
	else if (index == 1)
		return (1);
	return ((ft_fibonacci(index - 2)) + (ft_fibonacci(index - 1)));
}

#include <stdio.h>

int	main()
{
	int	a;

	a = ft_fibonacci(10);
	printf("%d\n", a);
}
