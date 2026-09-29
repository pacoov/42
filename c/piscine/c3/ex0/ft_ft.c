#include <unistd.h>

void	ft_ft(int *nbr)
{
	*nbr = 42;
}

#include <stdio.h>

int	main()
{
	int	a;

	a = 2685;
	ft_ft(&a);
	printf("%d\n", a);
}
