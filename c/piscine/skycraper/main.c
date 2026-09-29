/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   main.c                                             :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: enzvievi <enzvievi@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2026/08/16 17:58:31 by enzvievi          #+#    #+#             */
/*   Updated: 2026/08/16 19:37:19 by enzvievi         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include "rush.h"

int	check_error(char *str)
{
	int	i;

	i = 0;
	while (str[i])
		i++;
	if (i != 31)
		return (1);
	i = 0;
	while (str[i])
	{
		if (i % 2 == 0 && (str[i] < '1' || str[i] > '4'))
			return (1);
		if (i % 2 == 1 && str[i] != ' ')
			return (1);
		i++;
	}
	return (0);
}

int	main(int argc, char **argv)
{
	int	clues[16];
	int	grid[4][4];

	if (argc != 2 || check_error(argv[1]))
	{
		write(1, "Error", 5);
		write(1, "\n", 1);
		return (1);
	}
	parse_clues(argv[1], clues);
	init_grid(grid);
	if (solve(grid, clues, 0))
		aff_grill(grid);
	else
		write(1, "Error\n", 6);
	return (0);
}
