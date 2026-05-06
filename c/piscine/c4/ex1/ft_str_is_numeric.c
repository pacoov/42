#include <unistd.h>
#include <stdio.h>

int	ft_str_is_numeric(char *str)
{
	int	i;

	i = 0;
	while (str[i])
	{
		if (str[i] < 48 ||  str[i] > 57)
			return (0);
		i++;
	}
	return (1);
}

int     main()
{
        char *letter = "123";
        char *msg = "Po46p";
        char *sms = "";
        char *mms = "  ";

        int x = ft_str_is_numeric(letter);
        int y = ft_str_is_numeric(msg);
        int z = ft_str_is_numeric(sms);
        int o = ft_str_is_numeric(mms);

        printf("%s:\t%d", letter, x);
        printf("\n%s:\t%d", msg, y);
        printf("\n%s:\t%d", sms, z);
        printf("\n%s:\t%d", mms, o);
}

