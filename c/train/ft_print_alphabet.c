#include <unistd.h>

void    ft_print_alphabet(void)
{
    char    c = 97;

    while (c <= 122)
    {
        write(1, &c, 1);
        c++;
    }
}

int main()
{
    ft_print_alphabet();
    return 0;
}