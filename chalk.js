import chalk from 'chalk';
import validator from 'validator';
// "type": "module", to be added in PackageJSon

console.log(chalk.blue('Hello world!'));

const log = console.log;

// Combine styled and normal strings
log(chalk.blue('Hello') + ' World' + chalk.red('!'));

// Compose multiple styles using the chainable API
log(chalk.blue.bgRed.bold('Hello world!2'));

// Pass in multiple arguments
log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));

// Nest styles
log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));

// Nest styles of the same type even (color, underline, background)
log(chalk.green(
	'I am a green line ' +
	chalk.blue.underline.bold('with a blue substring') +
	' that becomes green again!'
));

const res=validator.isEmail("akhlaquea01@gmail.com");
console.log(res?chalk.green.inverse(res):chalk.red.inverse(res));