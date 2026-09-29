#include <unistd.h>
#include <stdio.h>

void	ft_rev_str(char *str, int size)
{
	int	i;
	char	tmp;

	i = 0;
	while (i < size / 2)
	{
		tmp = str[i];
		str[i] = str[size - 1 - i];
		str[size - 1 - i] = tmp;
		i++;
	}
}

int	main()
{
	char	str[] = "SalAm";
	int	size = 5;

	ft_rev_str(str, size);
	printf("%s\n", str);

	return 0;
}
