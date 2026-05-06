#include <unistd.h>

void    ft_putstr_non_printable(char *str)
{
        int     i;

        i = 0;
        while (str[i])
        {
                if (!(str[i] >= 32 && str[i] <= 126))
                {
                        write(1, "\\", 1);
                        write(1, &"0123456789abcdef"[str[i] / 16], 1);
                        write(1, &"0123456789abcdef"[str[i] % 16], 1);
                }
                else
                {
                        write(1, &str[i], 1);
                }
                i++;
        }
}

#include <stdio.h>
int	main(void)
{
	char mms[25] = "Hello\tHow are you ?";
	char msg[25] = "10  12 14 Bureau !";
	char sms[40] = "aKHY p0tter /a l'Ecole 42des sorCIERs !";

	msg[2] = 127;
	sms[12] = 127;
	printf("AFTER:\n");
	printf("%s\n", mms);
	printf("%s\n", msg);
	printf("%s\n", sms);

	printf("\n\nBEFORE:\n");
	ft_putstr_non_printable(mms);
	printf("\n");
	ft_putstr_non_printable(msg);
	printf("\n");
	ft_putstr_non_printable(sms);
}
