#!/usr/bin/env node
import { gameConsole, game }  from '..';
import { rules, question, correctAnswer } from '../games/isEven.js';
gameConsole(0, game(question, correctAnswer), rules);
