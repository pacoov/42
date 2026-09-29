#include <unistd.h>

int	ft_strlen(char *str)
{
	int	i;

	i = 0;
	while (str[i])
		i++;
	return (i);
}

#include <string.h>
#include <stdio.h>
int	main(void)
{
	char *let = strdup("p0p c0rN");
	char *msg = strdup("g~20");
	char *sms = strdup("");
	char *mms = strdup("CR7");

	msg[1] = 127;

	printf("%s:\t%d\n", let, ft_strlen(let));
	printf("%s:\t%d\n", msg, ft_strlen(msg));
	printf("%s:\t%d\n", sms, ft_strlen(sms));
	printf("%s:\t%d\n", mms, ft_strlen(mms));
}
