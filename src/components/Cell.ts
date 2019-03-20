import { HintColors, BombTileColor, FlippedTileColor } from './Colors';

export class Cell extends Phaser.GameObjects.Image {
	public index: number;
	public hasBomb: boolean = false;
	public flagged: boolean = false;
	public flipped: boolean = false;
	public neighbourBombs: number = 0;
	public icon: Phaser.GameObjects.Image;
	public number: Phaser.GameObjects.BitmapText;
	private size: number;

	constructor(scene: Phaser.Scene, x: number, y: number, size: number, texture: string) {
		super(scene, x, y, texture);
		this.size = size;
		this.setOrigin(0);
		this.setInteractive({cursor: 'pointer'});
		this.input.hitArea = new Phaser.Geom.Rectangle(0, 0, size, size);

		this.on('pointerdown', this.clickHandler, this);
	}

	public flipCell(clicked: boolean = false) {
		this.off('pointerdown');
		this.removeInteractive();

		this.flipped = true;

		if (this.flagged) {
			this.flagged = false;
			this.icon.destroy();
		}

		if (this.hasBomb) {
			this.icon = this.scene.add.image(this.x + this.size / 2, this.y + this.size / 2, 'mine')
						.setOrigin(0.5)
						.setDepth(5);

			if (clicked) {
				this.setTint(BombTileColor);
				this.scene.events.emit('cell:explode');
			}
		} else {
			this.setTint(FlippedTileColor);
			if (this.neighbourBombs) {
				this.number = this.scene.add
								.bitmapText(this.x + this.size / 2, this.y + this.size / 2, 'arcade', this.neighbourBombs.toString(), 8)
								.setOrigin(0.5)
								.setTint(HintColors[this.neighbourBombs])
								.setDepth(5);
			} else {
				this.scene.events.emit('cell:empty', this);
			}
		}
	}

	private clickHandler(pointer: Phaser.Input.Pointer) {
		if (pointer.buttons === 1) {
			this.flipCell(true);
		} else {
			this.markCell();
		}

		this.scene.events.emit('cell:clicked');
	}

	private markCell() {
		if (this.flagged) {
			this.flagged = false;
			if (this.icon) {
				this.icon.destroy();
			}
		} else {
			this.flagged = true;
			this.icon = this.scene.add.image(this.x + this.size / 2, this.y + this.size / 2, 'flag')
						.setOrigin(0.5)
						.setDepth(5);
		}
	}
}
