import 'phaser';
import './css/styles.css';
import { BootScene } from './scenes/BootScene';
import { gameConfig } from './config/gameConfig';
import { TitleScene } from './scenes/TitleScene';
import { GameScene } from './scenes/GameScene';

export class KokoGame extends Phaser.Game {
	constructor(config: Phaser.Types.Core.GameConfig) {
		super(config);
	}
}

window.onload = () => {
	const game = new KokoGame(gameConfig);

	game.scene.add('BootScene', BootScene, true);
	game.scene.add('TitleScene', TitleScene, false);
	game.scene.add('GameScene', GameScene, false);
};
