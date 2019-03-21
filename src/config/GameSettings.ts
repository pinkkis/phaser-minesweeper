export interface IGameSettings {
	[key: string]: any;
}
export const gameSettings: IGameSettings = {
	difficulty: {
		easy: {
			bombs: 25,
			cellSize: 20,
			time: 999,
		},
		medium: {
			bombs: 40,
			cellSize: 20,
			time: 300,
		},
		hard: {
			bombs: 100,
			cellSize: 10,
			time: 300,
		},
	},
};
