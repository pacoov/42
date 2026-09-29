#include <unistd.h>

char	*ft_strcapitalize(char *str)
{
	int	i;

	i = 0;
	while (str[i])
	{
		if ((i == 0 || (
					!(str[i - 1] >= 'a' && str[i - 1] <= 'z')
					&& !(str[i - 1] >= '0' && str[i - 1] <= '9')
					&& !(str[i - 1] >= 'A' && str[i - 1] <= 'Z'))))
		{
			if (str[i] >= 'a' && str[i] <= 'z')
				str[i] -= 32;
		}
		else
		{
			if (str[i] >= 'A' && str[i] <= 'Z')
				str[i] += 32;
		}
		i++;
	}
	return (str);
}

#include <string.h>
#include <stdio.h>
int	main(void)
{
	char *msg = strdup("10 12 14 Bureau !");
	char *sms = strdup("aKHY p0tter /a l'Ecole 42sorcier !");
	char *mms = strdup("front +bylka sur materazzi !");

	printf("--- BEFORE ---\n");
	printf("%s\n", msg);
	printf("%s\n", sms);
	printf("%s\n", mms);

	ft_strcapitalize(msg);
	ft_strcapitalize(sms);
	ft_strcapitalize(mms);

	printf("\n--- AFTER ---\n");
	printf("%s\n", msg);
	printf("%s\n", sms);
	printf("%s\n", mms);
}
