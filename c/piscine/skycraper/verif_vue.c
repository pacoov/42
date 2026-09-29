#include "rush.h"

int	check_up(int grid[4][4], int clues[16], int col)
{
	int	row;
	int	max;
	int	visible;

	row = 0;
	max = 0;
	visible = 0;
	while (row < 4)
	{
		if (grid[row][col] > max)
		{
			max = grid[row][col];
			visible++;
		}
		row++;
	}
	return (visible == clues[col]);
}

int	check_down(int grid[4][4], int clues[16], int col)
{
	int	row;
	int	max;
	int	visible;

	row = 3;
	max = 0;
	visible = 0;
	while (row >= 0)
	{
		if (grid[row][col] > max)
		{
			max = grid[row][col];
			visible++;
		}
		row--;
	}
	return (visible == clues[4 + col]);
}

int	check_left(int grid[4][4], int clues[16], int row)
{
	int	col;
	int	max;
	int	visible;

	col = 0;
	max = 0;
	visible = 0;
	while (col < 4)
	{
		if (grid[row][col] > max)
		{
			max = grid[row][col];
			visible++;
		}
		col++;
	}
	return (visible == clues[8 + row]);
}

int	check_right(int grid[4][4], int clues[16], int row)
{
	int	col;
	int	max;
	int	visible;

	col = 3;
	max = 0;
	visible = 0;
	while (col >= 0)
	{
		if (grid[row][col] > max)
		{
			max = grid[row][col];
			visible++;
		}
		col--;
	}
	return (visible == clues[12 + row]);
}

int	verif(int grid[4][4], int clues[16])
{
	int	i;

	i = 0;
	while (i < 4)
	{
		if (!check_left(grid, clues, i))
			return (0);
		if (!check_right(grid, clues, i))
			return (0);
		if (!check_up(grid, clues, i))
			return (0);
		if (!check_down(grid, clues, i))
			return (0);
		i++;
	}
	return (1);
}
