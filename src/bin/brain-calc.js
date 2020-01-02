#!/usr/bin/env node
import { gameConsole } from '..';
import { rules, game } from '../games/calc';

gameConsole(0, game, rules);
