*This activity has been created as part of the 42 curriculum by enzvievi.*

# Libft

## Description

Libft is my own C library. It recodes some functions of the libc and adds other useful functions to use in the next 42 projects.

The library has three parts:

- **Part 1 - Libc functions**: `ft_isalpha`, `ft_isdigit`, `ft_isalnum`, `ft_isascii`, `ft_isprint`, `ft_strlen`, `ft_memset`, `ft_bzero`, `ft_memcpy`, `ft_memmove`, `ft_strlcpy`, `ft_strlcat`, `ft_toupper`, `ft_tolower`, `ft_strchr`, `ft_strrchr`, `ft_strncmp`, `ft_memchr`, `ft_memcmp`, `ft_strnstr`, `ft_atoi`, `ft_calloc`, `ft_strdup`.
- **Part 2 - Additional functions**: `ft_substr`, `ft_strjoin`, `ft_strtrim`, `ft_split`, `ft_itoa`, `ft_strmapi`, `ft_striteri`, `ft_putchar_fd`, `ft_putstr_fd`, `ft_putendl_fd`, `ft_putnbr_fd`.
- **Part 3 - Linked list**: `ft_lstnew`, `ft_lstadd_front`, `ft_lstsize`, `ft_lstlast`, `ft_lstadd_back`, `ft_lstdelone`, `ft_lstclear`, `ft_lstiter`, `ft_lstmap`.

## Instructions

Compile the library:

```sh
make
```

This creates `libft.a`. Other rules: `make clean`, `make fclean`, `make re`.

Use it in a program:

```sh
cc main.c -L. -lft
```

## Resources

- The man pages of the libc functions (`man strlen`, `man memmove`, ...).
- No AI was used for this project.
