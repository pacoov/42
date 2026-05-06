#include <unistd.h>

int	ft_str_is_uppercase(char *str)
{
	int	i;

	i = 0;
	while (str[i])
	{
		if (str[i] < 65 || str[i] > 90)
			return (0);
		i++;
	}
	return (1);
}

#include <stdio.h>
int     main(void)
{
        char *letter = "Y0U";
        char *msg = "AZ";
        char *sms = "";
        char *mms = "  ";

        int x = ft_str_is_uppercase(letter);
        int y = ft_str_is_uppercase(msg);
        int z = ft_str_is_uppercase(sms);
        int o = ft_str_is_uppercase(mms);

        printf("%s:\t%d", letter, x);
        printf("\n%s:\t%d", msg, y);
        printf("\n%s:\t%d", sms, z);
        printf("\n%s:\t%d", mms, o);
}
