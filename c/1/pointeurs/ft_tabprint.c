#include <stdio.h>

void    ft_tabprint(int *tab, int size)
{
    int i;

    i = 0;
    while (i < size)
    {
        printf("tab[%d] = %d @ %p\n", i, tab[i], (void *)(tab + i));
        i++;
    }
}

int main(void)
{
    int tab[4] = {1, 12, 123, 1234};

    ft_tabprint(tab, 4);
    return 0;
}
