#include <stdlib.h>

char *ftstrncpy (char *dest, char *src, int n)
{
    int i = 0;
    while (i < n && src[i])
    {
        dest[i] = src[i];
        i++;
    }
    dest[i] = '\0';
    return dest;
}

char    **ft_split(char *str)
{
    int i = 0; int j= 0; int k = 0;
    char **out = malloc (sizeof(char) * 10000);

    while (str[i])
    {
        while (str[i] && (str[i] == 32 || str[i] == 9 || str[i] == 10))
            i++;
        j = i;
        while (str[i] && str[i] != 32 && str[i] != 10 && str[i] != 9)
            i++;
        if (i > j)
        {
            out[k] = malloc (sizeof(char) * (i - j) + 1);
            ftstrncpy(out[k], &str[j], i - j);
            k++;
        }
    }
    out[k] = NULL;
    return out;
}
