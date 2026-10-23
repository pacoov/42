#include <unistd.h>

int	main(int argc, char **argv)
{
	int	j = 1;

	if (argc >= 2)
	{
		int	i = 0;

		while (j <= 2)
		{
			if (argv[i][j] >= 'a' && argv[i][j] <= 'm')
			{
				argv[i][j] += 13;
				write(1, &argv[i][j], 1);
				i++;
			}	
			else if (argv[i][j] >= 'n' && argv[i][j] <= 'z')
			{
				argv[i][j] -= 13;
				write(1, &argv[i][j], 1);
				i++;
			}
			else if (argv[i][j] >= 'A' && argv[i][j] <= 'M')
			{
				argv[i][j] += 13;
				write(1, &argv[i][j], 1);
				i++;
			}
			else if (argv[i][j] >= 'N' && argv[i][j] <= 'Z')
			{
				argv[i][j] -= 13;
				write(1, &argv[i][j], 1);
				i++;
			}
			else
			{
				write(1, &argv[i][j], 1);
				i++;
			}
			j++;
		}
	}
	else
		return 0;
}
