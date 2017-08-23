var scribble = require('scribbletune');

// Where we store the clips
var clips = []

// Change the number of clips you want (10)
for(var i = 0; i < 10; i ++){

	// Change the pattern and notes accordingly
	// See the Scribbletune documentation for options: http://scribbletune.com/documentation.html
	let c = scribble.clip({
		notes: ['c4', 'd4', 'e4', 'f4', 'g4', 'a4', 'b4', 'c5'].filter((a,x) => x % 2 === 0),
		pattern:'x-x--x-x---xx-x-',
		accentMap: [70, 70, 70, 70, 70, 70, 70, 70],
		shuffle:true
	})

	clips.push(c)
}


// Add the clips to concatenate. Ideally this concat function would just let us put the clips array,
// but at least at the time of writing this it breaks that way.

scribble.midi(
	clips[0].concat(
		clips[1],
		clips[2],
		clips[3],
		clips[4],
		clips[5],
		clips[6],
		clips[7],
		clips[8],
		clips[9]
	), 'ideas.mid');
