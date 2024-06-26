import { Scene, Actor, Color, Label, Keys, Font, Vector } from 'excalibur';
import { Background } from './background';
import { Resources } from './resources';

class MainMenuScene extends Scene {
    onInitialize(engine) {
        super.onInitialize(engine);

        const background1 = new Background(Resources.skyline.toSprite(), 750, 370, 1.1, 1);
        this.add(background1);

        const welcomeLabel = new Label({
            text: 'Super Racer 2d',
            pos: new Vector(500, 250),
            font: new Font({
                size: 70,
                family: 'sans-serif',
                color: Color.White,
                bold: true
            })
        });

        const subLabel = new Label({
            text: 'Press Enter to start',
            pos: new Vector(580, 400),
            font: new Font({
                size: 40,
                family: 'sans-serif',
                color: Color.White,
                bold: true
            })
        });

        const subSubLabel = new Label({
            text: 'player 1 wasd',
            pos: new Vector(300, 500),
            font: new Font({
                size: 40,
                family: 'sans-serif',
                color: Color.White,
                bold: true
            })
        });

        const subSubSubLabel = new Label({
            text: 'player 2 Arrows',
            pos: new Vector(1000, 500),
            font: new Font({
                size: 40,
                family: 'sans-serif',
                color: Color.White,
                bold: true
            })
        });


        this.add(welcomeLabel);
        this.add(subLabel);
        this.add(subSubLabel);
        this.add(subSubSubLabel);
    }


    update(engine, delta) {
        super.update(engine, delta);

        if (engine.input.keyboard.wasPressed(Keys.Enter)) {
            engine.goToScene('level');
        }
    }
}

export { MainMenuScene };
