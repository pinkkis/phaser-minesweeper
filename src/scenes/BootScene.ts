import { BaseScene } from './BaseScene';

export class BootScene extends BaseScene {
	constructor(key: string, options: any) {
		super('BootScene');
	}

	public preload(): void {
		this.load.bitmapFont('arcade', './assets/fonts/arcade.png', './assets/fonts/arcade.xml');
		this.load.image('flag', './assets/flag.png');
		this.load.image('smile', './assets/smile.png');
		this.load.image('home', './assets/home.png');
		this.load.image('mine', './assets/mine.png');
	}

	public create(): void {
		this.scene.start('TitleScene', {});
	}
}
