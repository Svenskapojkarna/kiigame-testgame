import { KiiGame } from './kiigame.js';

let kiigame = new KiiGame();
let stage = kiigame.stage;

stage.find("#locker_room_1")[0].setSize(stage.getWidth(), stage.getHeight() - 100);
stage.find("#locker_room_2")[0].setSize(stage.getWidth(), stage.getHeight() - 100);

stage.find('#start_empty')[0].on('tap click', function(event) {
	var intro_delay = kiigame.play_sequence("intro", true);
    setTimeout(() => kiigame.do_transition(kiigame.game_start_layer.id(), 0), intro_delay);
	event = event.target;
	stage.draw();
});
