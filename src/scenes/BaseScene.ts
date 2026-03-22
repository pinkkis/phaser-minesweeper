import { KokoGame } from '../game';

export class BaseScene extends Phaser.Scene {
	public game!: KokoGame;

	constructor(key: string) {
		super(key);
	}

	public preload(): void {
		// empty
	}

	public setTimerEvent(timeMin: number, timeMax: number, callback: () => void, params?: any[]): Phaser.Time.TimerEvent {
		return this.time.delayedCall(Phaser.Math.Between(timeMin, timeMax), callback, params || [], this);
	}
}
