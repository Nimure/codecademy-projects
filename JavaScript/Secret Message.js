let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

//console.log(secretMessage.length);

//remove last string
secretMessage.pop();

//check work
//console.log(secretMessage.length);

//add words 'to' and 'Program to the end
secretMessage.push('to', 'Program');

//check work
//console.log(secretMessage.length);

//change 'easily' to 'right'
//console.log(secretMessage.indexOf('easily'));
secretMessage[7] = 'right'
//check work
//console.log(secretMessage[7]);

//remove first string
secretMessage.shift();

//check work
//console.log(secretMessage.length);

//add 'Programming' to the beginning
secretMessage.unshift('Programming');

//check work
//console.log(secretMessage.length);

//remove'get' 'right' 'the' 'first' 'time', replace with 'know'
//console.log(secretMessage.indexOf('get'));
// indicies 6-10
secretMessage.splice(6, 5, 'know')

console.log(secretMessage.join(' '));

/* message should read: Programming is not about what you know, it is about what you can figure out. -2015, Chris Pine, Learn to Program */