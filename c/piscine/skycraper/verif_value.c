/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   verif_value.c                                      :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: enzvievi <enzvievi@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2026/08/15 20:15:17 by enzvievi          #+#    #+#             */
/*   Updated: 2026/08/16 19:27:49 by enzvievi         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include "rush.h"

int	check_row(int grid[4][4], int row, int value)
{
	int	col;

	col = 0;
	while (col < 4)
	{
		if (grid[row][col] == value)
			return (0);
		col++;
	}
	return (1);
}

int	check_col(int grid[4][4], int col, int value)
{
	int	row;

	row = 0;
	while (row < 4)
	{
		if (grid[row][col] == value)
			return (0);
		row++;
	}
	return (1);
}
