import { BaseScene } from './BaseScene';
import { Cell } from '../components/Cell';
import { settings } from '../config/gameConfig';
import {  BombTileColor, MenuButtonColor, WhiteColor } from '../components/Colors';

export class GameScene extends BaseScene {
	private renderTexture: Phaser.GameObjects.RenderTexture;
	private cellRowWidth: number;
	private cells: Cell[];

	private timer: Phaser.Time.TimerEvent;
	private timeText: Phaser.GameObjects.BitmapText;
	private bombsText: Phaser.GameObjects.BitmapText;

	private difficulty: any;

	constructor(key: string, options: any) {
		super('GameScene');
	}

	public create(data: any): void {
		this.difficulty = settings.difficulty[data.difficulty];
		this.cells = [];

		this.cellRowWidth = this.scale.gameSize.width / this.difficulty.cellSize;
		this.renderTexture = this.add.renderTexture(0, 0).setVisible(false);
		this.createCellTexture();

		this.createUI(this.difficulty.bombs);

		this.createPlayfield();
		this.createMines(this.difficulty.bombs);
		this.bindEvents();
	}

	// ---------------------------------

	private bindEvents() {
		this.events.on('victory', () => this.gameover(true), this);
		this.events.on('timeout', () => this.gameover(false), this);

		this.events.on('cell:explode', () => this.gameover(false), this);
		this.events.on('cell:empty', (cell: Cell) => {
			this.openEmptyAreas(cell);
		}, this);

		this.events.on('cell:clicked', () => {
			this.checkScores();
		}, this);

	}

	private gameover(hasWon: boolean) {
		this.add.bitmapText(this.scale.gameSize.width / 2, 20, 'arcade', hasWon ? 'victory' : 'game over', 32)
				.setOrigin(0.5, 0)
				.setDepth(10);

		this.add.bitmapText(this.scale.gameSize.width / 2, this.scale.gameSize.height - 55, 'arcade', 'menu', 32)
			.setTint(MenuButtonColor)
			.setDepth(10)
			.setOrigin(0.5, 0)
			.setInteractive({ cursor: 'pointer' })
			.on('pointerdown', () => this.scene.start('TitleScene'), this);

		this.cells.filter( (cell: Cell) => cell.hasBomb).forEach( (cell: Cell) => cell.flipCell() );
		this.cells.forEach( (cell: Cell) => cell.removeInteractive() );

		this.timer.destroy();
	}

	private createPlayfield(): void {
		const topPadding = 20;
		for (let y = topPadding; y < this.scale.gameSize.height; y += this.difficulty.cellSize) {
			for (let x = 0; x < this.scale.gameSize.width; x += this.difficulty.cellSize) {
				this.add.existing(this.createCell(x, y));
			}
		}
	}

	private createUI(bombCount: number): void {
		this.timeText = this.add.bitmapText(this.scale.gameSize.width / 2, 6, 'arcade', `time:${this.difficulty.time}`, 8)
								.setOrigin(0)
								.setDepth(7);

		this.bombsText = this.add.bitmapText(6, 6, 'arcade', `bombs:${String(bombCount).padStart(3, '0')}`, 8)
								.setOrigin(0)
								.setDepth(7);

		this.timer = this.time.addEvent({
			delay: 1000,
			repeat: this.difficulty.time,
			callback: () => {
				this.timeText.setText(`time:${String(this.timer.repeatCount).padStart(3, '0')}`);
				if (this.timer.repeatCount === 0) {
					this.timeText.setTint(BombTileColor);
					this.events.emit('timeout');
				}
			},
			callbackScope: this,
		});
	}

	private checkScores(): void {
		const unopenedCount = this.cells.filter( (cell: Cell) => !cell.flipped ).length;

		if (unopenedCount === this.difficulty.bombs) {
			this.events.emit('victory');
		} else {
			const flaggedCount = this.cells.filter( (cell: Cell) => cell.flagged ).length;
			this.updateBombCounter(flaggedCount);
		}
	}

	private updateBombCounter(flaggedCount: number): void {
		const counter = this.difficulty.bombs - flaggedCount;
		const isNegative = counter < 0;
		const bombString = `bombs:${isNegative ? '-' : ''}${String(Math.abs(counter)).padStart(3, '0')}`;

		this.bombsText.setText(bombString);

		if (counter === 0) {
			this.bombsText.setTint(MenuButtonColor);
		} else if (counter < 0) {
			this.bombsText.setTint(BombTileColor);
		} else {
			this.bombsText.setTint(WhiteColor);
		}
	}

	private createCell(x: number, y: number): Cell {
		const cell = new Cell(this, x, y, this.difficulty.cellSize, 'cell');
		cell.index = this.cells.length;
		this.cells.push(cell);
		return cell;
	}

	private createMines(count: number): void {
		// put bombs in cells
		for (let i = 0; i < count; i++) {
			const bomblessCells = this.cells.filter((cell: Cell) => !cell.hasBomb);
			bomblessCells[Phaser.Math.Between(0, bomblessCells.length - 1)].hasBomb = true;
		}

		// go through all bombs and mark neighbour bomb counts
		this.cells
			.filter((cell: Cell) => cell.hasBomb)
			.forEach((cell: Cell) => {
				const neighbours = this.getCellNeighbours(cell);
				neighbours.forEach((c: Cell) => c.neighbourBombs++);
			});
	}

	private createCellTexture() {
		const graphics = this.add.graphics();
		graphics
			.fillStyle(0x777777, 1)
			.fillRoundedRect(0, 0, this.difficulty.cellSize, this.difficulty.cellSize, 2)
			.lineStyle(1, 0x000000, .2)
			.strokeRoundedRect(0, 0, this.difficulty.cellSize, this.difficulty.cellSize, 2);

		this.renderTexture.draw(graphics).saveTexture('cell');

		graphics.destroy();
	}

	private getCellNeighbours(cell: Cell): Cell[] {
		const results: Cell[] = [];
		let targetIndex = -1;

		// above
		targetIndex = cell.index - this.cellRowWidth - 1;
		if (targetIndex > -1 && targetIndex < this.cells.length && targetIndex % this.cellRowWidth < cell.index % this.cellRowWidth) { results.push(this.cells[targetIndex]); }

		targetIndex = cell.index - this.cellRowWidth;
		if (targetIndex > -1 && targetIndex < this.cells.length) { results.push(this.cells[targetIndex]); }

		targetIndex = cell.index - this.cellRowWidth + 1;
		if (targetIndex > -1 && targetIndex < this.cells.length && targetIndex % this.cellRowWidth > cell.index % this.cellRowWidth) { results.push(this.cells[targetIndex]); }

		// same row
		targetIndex = cell.index - 1;
		if (targetIndex > -1 && targetIndex < this.cells.length && targetIndex % this.cellRowWidth < cell.index % this.cellRowWidth) { results.push(this.cells[targetIndex]); }

		targetIndex = cell.index + 1;
		if (targetIndex > -1 && targetIndex < this.cells.length && targetIndex % this.cellRowWidth > cell.index % this.cellRowWidth) { results.push(this.cells[targetIndex]); }

		// below
		targetIndex = cell.index + this.cellRowWidth - 1;
		if (targetIndex > -1 && targetIndex < this.cells.length && targetIndex % this.cellRowWidth < cell.index % this.cellRowWidth) { results.push(this.cells[targetIndex]); }

		targetIndex = cell.index + this.cellRowWidth;
		if (targetIndex > -1 && targetIndex < this.cells.length) { results.push(this.cells[targetIndex]); }

		targetIndex = cell.index + this.cellRowWidth + 1;
		if (targetIndex > -1 && targetIndex < this.cells.length && targetIndex % this.cellRowWidth > cell.index % this.cellRowWidth) { results.push(this.cells[targetIndex]); }

		return results;
	}

	private openEmptyAreas(cell: Cell) {
		const openQueue: Cell[] = [cell];

		while (openQueue.length > 0) {
			const currentCell = openQueue.shift();
			const neighbours = this.getCellNeighbours(currentCell);

			neighbours.forEach( (c: Cell) => {
				if (!c.flipped && !c.hasBomb) {
					c.flipCell();
					if (!c.neighbourBombs) {
						openQueue.push(c);
					}
				}
			});
		}
	}
}
