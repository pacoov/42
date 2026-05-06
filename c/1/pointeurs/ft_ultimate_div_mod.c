#include <stdio.h>

void	ft_ultimate_div_mod(int *a, int *b)
{
	int	div;
	int	mod;

	div = *a;
	mod = *b;
	*a = div / mod;
	*b = div % mod;
}

int	main(void)
{
	int	a;
	int	b;

	a = 50;
	b = 5;
	ft_ultimate_div_mod(&a, &b);
	printf("div = %d, mod = %d\n", a, b);

	return(0);
}
