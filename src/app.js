#!/usr/bin/npm start
// Calls npm to start this script; requires a start target in package.json

/**
 * @fileOverview Backend for a basic flashcard application
 * @author Marcus Hobbs
 * @requires {@link https://www.npmjs.com/package/babel-cli|babel-cli}
 * @requires {@link https://www.npmjs.com/package/chalk|chalk}
 * @requires {@link https://www.npmjs.com/package/debug|debug}
 * @requires {@link https://www.npmjs.com/package/commander|commander}
 * @requires {@link https://www.npmjs.com/package/jsdoc|jsdoc}
 * @version 0.0.1
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 * @see [Babel]{@link https://babeljs.io/} for more information on ES6 transpiling
 */

/** Import a set of generally useful tools */
import chalk from 'chalk';      // Chalk colorizes console output
import debug from 'debug';      // Debug provides configurable console output
import app from 'commander';    // Provides utils for command line apps

/** Import application specific objects */
import { BasicCard } from './BasicCard.js'; // Get the BasicCard constructor
import { ClozeCard } from './ClozeCard.js'; // Get the ClozeCard constructor

// The logger outputs debug information
// DEBUG logs will be prepended with FLSHCRD indicator
const log = debug('FLSHCRD');

/** Decorate the logger with a signature move */
log.mytag = () => {
    // Define a chalk style to colorize error messages
    let style = chalk.bgRed.bold.yellow;
    let mytag = " ̿ ̿\̵͇̿̿\з=(◕_◕)=ε/̵͇̿̿/'̿'̿ ̿"; // We signs our work for the masses
    log(style(mytag));
};

/**
 * Logs an error message to the STDERR stream
 * @name logError
 * @function
 * @global
 * @param {string} text - The error message to log
 * @example log.error("A BAD THING HAPPENED!");
 */
log.error = (text) => {
    // Define a chalk style to colorize error messages
    let style = chalk.bgRed.bold.white;
	console.error(style(text));
};

/**
 * Logs a message to the STDOUT stream
 * @name logInfo
 * @function
 * @global
 * @param {string} text - The message to log
 * @example log.info("We did a neat thing.");
 */
log.info = (text) => {
    // Define a chalk style to colorize messages
    let style = chalk.green;
	console.log(style(text));
};

// Let the user know whose work copypasta
log.mytag();

const firstPresident = new BasicCard("Who was the first president of the United States?", "George Washington");

// "Who was the first president of the United States?"
log.info(firstPresident.front);

// "George Washington"
log.info(firstPresident.back);

const firstPresidentCloze = new ClozeCard("George Washington was the first president of the United States.", "George Washington");

// "George Washington"
log.info(firstPresidentCloze.cloze);

// " ... was the first president of the United States.
log.info(firstPresidentCloze.partial);

// "George Washington was the first president of the United States.
log.info(firstPresidentCloze.fullText);

// Should throw or log an error because "oops" doesn't appear in "This doesn't work"
try {
    const brokenCloze = new ClozeCard("This doesn't work", "oops");
}
catch (anException) {
    // Log the exception message
    log.error(anException.message);
}
