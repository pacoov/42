#include <stdio.h>

void	ft_swap(int *a, int *b)
{
	int	temp;

	temp = *a;
	*a = *b;
	*b = temp;
}

int	main()
{
	int	x = 10;
	int	y = 153;

	ft_swap(&x, &y);
	printf("x = %d, y = %d", x, y);
	return 0;
}
