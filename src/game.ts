declare var require: any;

import 'phaser';
import './css/styles.css';
import { BootScene } from './scenes/BootScene';
import { gameConfig } from './config/gameConfig';
import { TitleScene } from './scenes/TitleScene';
import { GameScene } from './scenes/GameScene';

const Stats = require('stats-js');

// set up stats
const stats = new Stats();
stats.setMode(0); // 0: fps, 1: ms
stats.domElement.style.position = 'absolute';
stats.domElement.style.right = '0px';
stats.domElement.style.top = '0px';
document.body.appendChild(stats.domElement);

// set up game class, and global stuff
export class KokoGame extends Phaser.Game {
	private debug: boolean = false;

	constructor(config: GameConfig) {
		super(config);

		this.events.on('prestep', () => {
			stats.begin();
		});

		this.events.on('postrender', () => {
			stats.end();
		});
	}
}

// start the game
window.onload = () => {
	const game = new KokoGame(gameConfig);

	game.scene.add('BootScene', BootScene, true);
	game.scene.add('TitleScene', TitleScene, false);
	game.scene.add('GameScene', GameScene, false);
};
