#include <unistd.h>

char	*ft_strupcase(char *str)
{

	int	i;

	i = 0;
	while (str[i])
	{
		if (str[i] >= 97 && str[i] <= 122)
			str[i] -= 32;
		i++;
	}
	return (str);
}
#include <stdio.h>
#include <string.h>
int	main(void)
{
	char *letter = strdup("pop c0rn");
	char msg[5] = "g~20";
	char *sms = strdup("");
	char *mms = strdup(" b**e ");

	msg[1] = 127;

	printf("%s", ft_strupcase(letter));
	printf("\n%s", ft_strupcase(msg));
	printf("\n%s", ft_strupcase(sms));
	printf("\n%s", ft_strupcase(mms));
}
