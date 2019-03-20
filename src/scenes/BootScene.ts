import { BaseScene } from './BaseScene';

export class BootScene extends BaseScene{
	constructor(key: string, options: any) {
		super('BootScene');
	}

	public preload(): void {
		this.load.bitmapFont('arcade', './assets/fonts/arcade.png', './assets/fonts/arcade.xml');
		this.load.image('flag', './assets/flag.png');
		this.load.image('mine', './assets/mine.png');
	}

	public init(): void {
		// empty
	}

	public create(): void {
		console.info('BootScene - create()');
		this.scene.start('TitleScene', {});
	}
}
