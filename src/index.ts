import 'phaser';
import logoImg from './assets/logo.png';

export default class Demo extends Phaser.Scene {
  constructor() {
    super('demo');
  }

  preload() {
    this.load.image('logo', logoImg);
  }

  create() {
    const logo = this.add.image(400, 150, 'logo');

    this.tweens.add({
      targets: logo,
      y: 450,
      duration: 2000,
      ease: 'Power2',
      yoyo: true,
      loop: -1,
    });
  }
}

const config = {
  type: Phaser.AUTO,
  backgroundColor: '#125555',
  width: 800,
  height: 600,
  scene: Demo,
};

const game = new Phaser.Game(config);
