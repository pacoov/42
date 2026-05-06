#include <unistd.h>

void	ft_putstr(char *str)
{
	int	i;

	i = 0;
	while (str[i])
	{
		write(1, &str[i], 1);
		i++;
	}
}

#include <string.h>
#include <stdio.h>
int	main(void)
{
	char *let = strdup("p0p c0rN\n");
	char *msg = strdup("g~20\n");
	char *sms = strdup("\n");
	char *mms = strdup("CR7\n");

	msg[1] = 127;

	ft_putstr(let);
	ft_putstr(msg);
	ft_putstr(sms);
	ft_putstr(mms);
}
