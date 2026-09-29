#include <unistd.h>

void	ft_putchar(char c)
{
	write(1, &c, 1);
}

int	main()
{
	ft_putchar('N');
	ft_putchar('O');
	ft_putchar('O');
	ft_putchar('R');
	ft_putchar('\n');
	ft_putchar('I');
	ft_putchar(' ');
	ft_putchar('L');
	ft_putchar('O');
	ft_putchar('V');
	ft_putchar('E');
	ft_putchar(' ');
	ft_putchar('U');
	return (0);
}
