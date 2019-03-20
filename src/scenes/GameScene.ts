import { BaseScene } from './BaseScene';
import { Cell } from '../components/Cell';
import { settings } from '../config/gameConfig';

export class GameScene extends BaseScene {
	private renderTexture: Phaser.GameObjects.RenderTexture;
	private cellSize: number;
	private cellRowWidth: number;
	private cells: Cell[];
	private gameState: 'init'|'playing'|'gameover' = 'init';

	constructor(key: string, options: any) {
		super('GameScene');
	}

	public create(data: any): void {
		console.info(`GameScene - create(${JSON.stringify(data)})`);
		const difficulty = settings.difficulty[data.difficulty];

		this.cellSize = difficulty.cellSize;
		this.cells = [];

		this.cellRowWidth = this.scale.gameSize.width / this.cellSize;
		this.renderTexture = this.add.renderTexture(0, 0);
		this.createCellTexture();

		this.createPlayfield();
		this.createMines(difficulty.bombs);
		this.bindEvents();

		this.gameState = 'playing';
	}

	// ---------------------------------

	private bindEvents() {
		this.events.on('cell:explode', () => {
			this.gameState = 'gameover';
			this.add.bitmapText(this.scale.gameSize.width / 2, 20, 'arcade', 'game over', 32).setOrigin(0.5).setDepth(10);
			this.add.bitmapText(this.scale.gameSize.width / 2, this.scale.gameSize.height - 25, 'arcade', 'menu', 32)
				.setDepth(10)
				.setOrigin(0.5)
				.setInteractive({ cursor: 'pointer' })
				.on('pointerdown', () => this.scene.start('TitleScene'), this);

			this.cells.filter( (cell: Cell) => cell.hasBomb).forEach( (cell: Cell) => cell.flipCell() );
			this.cells.forEach( (cell: Cell) => cell.removeInteractive() );
		}, this);

		this.events.on('cell:empty', (cell: Cell) => {
			this.openEmptyAreas(cell);
		}, this);

		this.events.on('cell:clicked', () => {
			console.log('count state here');
		}, this);
	}

	private createPlayfield(): void {
		for (let y = 0; y < this.scale.gameSize.height; y += this.cellSize) {
			for (let x = 0; x < this.scale.gameSize.width; x += this.cellSize) {
				this.add.existing(this.createCell(x, y));
			}
		}
	}

	private createCell(x: number, y: number): Cell {
		const cell = new Cell(this, x, y, this.cellSize, 'cell');
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
			.fillRoundedRect(0, 0, this.cellSize, this.cellSize, 2)
			.lineStyle(1, 0x000000, .2)
			.strokeRoundedRect(0, 0, this.cellSize, this.cellSize, 2);

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
