#include <unistd.h>

int	main(int argc, char **argv)
{
	int	seen[256] = {0};
	int	i;
	int	j;

	if (argc == 3)
	{
		j = 1;
		while (j <= 2)
		{
			i = 0;
			while (argv[j][i])
			{
				if (!seen[(unsigned char)argv[j][i]])
				{
					seen[(unsigned char)argv[j][i]] = 1;
					write(1, &argv[j][i], 1);
				}
				i++;
			}
			j++;
		}
	}
	write(1, "\n", 1);
	return (0);
}
