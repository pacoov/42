#include <unistd.h>

int	main(int argc, char **argv)
{
	int	j = 1;

	if (argc >= 2)
	{
		int	i = 0;

		while (argv[j][i])
		{
			if (argv[j][i] >= 'a' && argv[j][i] <= 'm')
			{
				argv[j][i] += 13;
				write(1, &argv[j][i], 1);
				i++;
			}	
			else if (argv[j][i] >= 'n' && argv[j][i] <= 'z')
			{
				argv[j][i] -= 13;
				write(1, &argv[j][i], 1);
				i++;
			}
			else if (argv[i][j] >= 'A' && argv[j][i] <= 'M')
			{
				argv[j][i] += 13;
				write(1, &argv[j][i], 1);
				i++;
			}
			else if (argv[j][i] >= 'N' && argv[j][i] <= 'Z')
			{
				argv[j][i] -= 13;
				write(1, &argv[j][i], 1);
				i++;
			}
			else
			{
				write(1, &argv[j][i], 1);
				i++;
			}
			j++;
		}
	}
	else
		return 0;
}
