// phaser game config
export const gameConfig: GameConfig = {
	type: Phaser.AUTO,
	scale: {
		parent: 'game-container',
		mode: Phaser.Scale.FIT,
		autoCenter: Phaser.Scale.CENTER_BOTH,
		width: 320,
		height: 180,
	},
	disableContextMenu: true,
	render: {
		pixelArt: true,
	},
};

export interface IGameSettings {
	[key: string]: any;
}

export const settings: IGameSettings = {
	difficulty: {
		easy: {
			bombs: 25,
			cellSize: 20,
			time: 999,
		},
		medium: {
			bombs: 50,
			cellSize: 20,
			time: 180,
		},
		hard: {
			bombs: 100,
			cellSize: 10,
			time: 180,
		},
	},
};
