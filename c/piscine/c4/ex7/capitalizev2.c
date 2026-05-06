#include <unistd.h>

// --- TEST LE CHAR + RETOURNE UNE VALR EN CHAR ! ---
char	alpha_wann(char *str)
{
	if (str[0] >= 48 && str[0] <= 57)
		return ('1');
	if (str[0] >= 65 && str[0] <= 90)
		return ('A');
	if (str[0] >= 97 && str[0] <= 122)
		return ('a');
	else
		return ('-');
}

// --- RETOURNE LE CHAR EN MAJSCL ! ---
void	alpha_blondy(char *str)
{
	while (*str)
	{
		if (alpha_wann(&str[-1]) == '-')
		{
			if (alpha_wann(&str[0]) == 'a')
			{
				str[0] -= 32;
			}
		}
		str++;
	}
}

// --- TEST LA PREMIERE VALR DU CHAR ! ---
void	alpha_5_20(char *str)
{
	while (*str)
	{
		if (alpha_wann(&str[0]) == 'A')
			str[0] += 32;
		str++;
	}
}

char	*ft_strcapitalize(char *str)
{
	alpha_5_20(str);
	alpha_blondy(str);
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
