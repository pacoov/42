#include <unistd.h>

int	ft_str_is_printable(char *str)
{
	int	i;

	i = 0;
	while (str[i])
	{
		if (str[i] < 32 || str[i] > 126)
			return (0);
		i++;
	}
	return (1);
}

#include <stdio.h>
int	main(void)
{
	char *letter = "Y0\tU";
	char msg[2] = "~";
	char *sms = "";
	char *mms = "  ";

	msg[0] = 127;

	int x = ft_str_is_printable(letter);
	int y = ft_str_is_printable(msg);
	int z = ft_str_is_printable(sms);
	int o = ft_str_is_printable(mms);

	printf("%s:\t%d", letter, x);
	printf("\n%s:\t%d", msg, y);
	printf("\n%s:\t%d", sms, z);
	printf("\n%s:\t%d", mms, o);
}
