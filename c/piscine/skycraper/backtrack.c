/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   backtrack.c                                        :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: enzvievi <enzvievi@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2026/08/15 20:49:00 by enzvievi          #+#    #+#             */
/*   Updated: 2026/08/16 19:37:19 by enzvievi         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include "rush.h"

void	init_grid(int grid[4][4])
{
	int	i;
	int	j;

	i = 0;
	j = 0;
	while (i < 4)
	{
		j = 0;
		while (j < 4)
		{
			grid[i][j] = 0;
			j++;
		}
		i++;
	}
}

int	solve(int grid[4][4], int clues[16], int pos)
{
	int	row;
	int	col;
	int	value;

	if (pos == 16)
		return (verif(grid, clues));
	row = pos / 4;
	col = pos % 4;
	value = 1;
	while (value <= 4)
	{
		if (check_row(grid, row, value) && check_col(grid, col, value))
		{
			grid[row][col] = value;
			if (solve(grid, clues, pos + 1))
				return (1);
			grid[row][col] = 0;
		}
		value++;
	}
	return (0);
}
