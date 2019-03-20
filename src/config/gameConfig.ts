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
			bombs: 15,
			cellSize: 20,
		},
		medium: {
			bombs: 30,
			cellSize: 20,
		},
		hard: {
			bombs: 60,
			cellSize: 10,
		},
	},
};
