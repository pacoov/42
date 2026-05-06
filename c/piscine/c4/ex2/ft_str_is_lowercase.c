#include <unistd.h>

int	ft_str_is_lowercase(char *str)
{
	int	i;

	i = 0;
	while (str[i])
	{
		if (str[i] < 97 || str[i] > 122)
			return (0);
		i++;
	}
	return (1);
}

#include <stdio.h>
int	main(void)
{
	char *letter = "Pop";
	char *msg = "az";
	char *sms = "";
	char *mms = "  ";

	int x = ft_str_is_lowercase(letter);
	int y = ft_str_is_lowercase(msg);
	int z = ft_str_is_lowercase(sms);
	int o = ft_str_is_lowercase(mms);

	printf("%s:\t%d", letter, x);
	printf("\n%s:\t%d", msg, y);
	printf("\n%s:\t%d", sms, z);
	printf("\n%s:\t%d", mms, o);
}
