#!/usr/bin/env node
import { gameConsole, game } from '..';
import { rules, question, correctAnswer } from '../games/calc.js';
gameConsole(0, game(question, correctAnswer), rules);
