#!/usr/bin/env node
import { gameConsole } from '..';
import { rules, game } from '../games/isPrime';

gameConsole(0, game, rules);
