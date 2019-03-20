import { BaseScene } from './BaseScene';
import { Difficulty } from '../components/Difficulty';

export class TitleScene extends BaseScene{
	constructor(key: string, options: any) {
		super('TitleScene');
	}

	public create(): void {
		console.info('TitleScene - create()');
		this.add.bitmapText(10, 10, 'arcade', 'Mine sweeper', 16);

		this.add.rectangle(10, 50, 80, 40, 0x339933, 1)
			.setOrigin(0)
			.setInteractive({cursor: 'pointer'})
			.on('pointerup', () => this.scene.start('GameScene', {difficulty: Difficulty.EASY}), this );
		this.add.bitmapText(20, 60, 'arcade', 'easy', 16);

		this.add.rectangle(100, 50, 115, 40, 0x333399, 1)
			.setOrigin(0)
			.setInteractive({cursor: 'pointer'})
			.on('pointerup', () => this.scene.start('GameScene', {difficulty: Difficulty.MEDIUM}), this );
		this.add.bitmapText(110, 60, 'arcade', 'medium', 16);

		this.add.rectangle(225, 50, 80, 40, 0x993333, 1)
			.setOrigin(0)
			.setInteractive({cursor: 'pointer'})
			.on('pointerup', () => this.scene.start('GameScene', {difficulty: Difficulty.HARD}), this );
		this.add.bitmapText(235, 60, 'arcade', 'hard', 16);

		this.add.rectangle(215, 150, 100, 20, 0x333333, 1)
			.setOrigin(0)
			.setInteractive({cursor: 'pointer'})
			.on('pointerup', () => {
				if (this.scale.isFullscreen) {
					this.scale.stopFullscreen();
				} else {
					this.scale.startFullscreen();
					screen.orientation.lock('landscape-primary');
				}
			}, this);
		this.add.bitmapText(225, 155, 'arcade', 'fullscreen', 8);
	}
}
