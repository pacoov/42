#include <unistd.h>

void	ft_ultimate_div_mod(int *a, int *b)
{
	int	tmp;

	tmp = *a / *b;
	*b = *a % *b;
	*a = tmp;
}

#include <stdio.h>
int	main(void)
{
	int	x = 11;
	int	m = 5;

	printf("x: %d\nm: %d\n\n", x, m);
	ft_ultimate_div_mod(&x, &m);
	printf("div: %d\nmod: %d\n", x, m);
}
