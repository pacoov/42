#include <unistd.h>

int	ft_str_is_alpha(char *str)
{
	int	i;

	i = 0;
	while (str[i])
	{
		if ((str[i] < 65 || str[i] > 90)
			&& (str[i] < 97 || str[i] > 122))
			return (0);
		i++;
	}
	return (1);
}

#include <stdio.h>

int	main()
{
	char *letter = "YOU";
	char *msg = "Pop";
	char *sms = "";
	char *mms = "  ";

	int x = ft_str_is_alpha(letter);
	int y = ft_str_is_alpha(msg);
	int z = ft_str_is_alpha(sms);
	int o = ft_str_is_alpha(mms);

	printf("%s:\t%d", letter, x);
	printf("\n%s:\t%d", msg, y);
	printf("\n%s:\t%d", sms, z);
	printf("\n%s:\t%d", mms, o);
}
