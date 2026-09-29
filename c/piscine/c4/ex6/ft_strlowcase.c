#include <unistd.h>

char	*ft_strlowcase(char *str)
{
	int	i;

	i = 0;
	while (str[i])
	{
		if (str[i] >= 65 && str[i] <= 90)
			str[i] += 32;
		i++;
	}
	return (str);
}

#include <stdio.h>
#include <string.h>
int	main(void)
{
	char *letter = strdup("POP C0RN");
	char *msg = strdup("G~20");
	char *sms = strdup("");
	char *mms = strdup(" P**E ");

	msg[1] = 127;

	printf("%s", ft_strlowcase(letter));
	printf("\n%s", ft_strlowcase(msg));
	printf("\n%s", ft_strlowcase(sms));
	printf("\n%s", ft_strlowcase(mms));
}
