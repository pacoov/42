#include <unistd.h>

void    ft_print_reverse_alphabet(void)
{
    char    c = 122;

    while (c >= 97)
    {
        write(1, &c, 1);
        c--;
    }
}

int main()
{
    ft_print_reverse_alphabet();
    return 0;
}