#include <unistd.h>

int	main(int argc, char **argv)
{
	int	j = 1;
	int	i;

	if (argc >= 2)
	{
		while (j <= argc)
		{
			i = 0;
			while (argv[j][i])
			{
				if (argv[j][i] >= 'a' && argv[j][i] <= 'm')
					argv[j][i] += 13;
				else if (argv[j][i] >= 'n' && argv[j][i] <= 'z')
					argv[j][i] -= 13;
				else if (argv[j][i] >= 'A' && argv[j][i] <= 'M')
					argv[j][i] += 13;
				else if (argv[j][i] >= 'N' && argv[j][i] <= 'Z')
					argv[j][i] -= 13;
				write(1, &argv[j][i], 1);
				i++;
			}
			j++;
			if ( j == argc)
			{
				write(1, "\n", 1);
				return 0;
			}
			write(1, " ", 1);
		}
	}
	else
	{
		write(1, "\n", 1);
		return 0;
	}
}
