


// var express = require('express');
var scribble = require('scribbletune');

// Setup server
// var app = express();
// var server = require('http').createServer(app);


let a = scribble.clip({
		notes: ['c4'],
		pattern:'x-x--x-x---xx-x-',
		accentMap: [70, 70, 70, 70, 70, 70, 70, 70],
	})


// Where we store the clips
var clips = []

// Change the number of clips you want (400)
for(var i = 0; i < 10; i ++){

	// Change the pattern and notes accordingly
	let c = scribble.clip({
		notes: ['c4', 'd4', 'e4', 'f4', 'g4', 'a4', 'b4', 'c5'].filter((a,x) => x % 2 === 0),
		pattern:'x-x--x-x---xx-x-',
		accentMap: [70, 70, 70, 70, 70, 70, 70, 70],
		shuffle:true
	})

	clips.push(c)
}


// Add the clips to concatenate
scribble.midi(
	a.concat(
		clips[0],
		clips[1],
		clips[2],
		clips[3],
		clips[4],
		clips[5],
		clips[6],
		clips[7],
		clips[8],
		clips[9]
	), 'new_midi_file.mid');




