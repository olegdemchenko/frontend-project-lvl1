#!/usr/bin/env node
import { gameConsole } from '..';
import { rules, game } from '../games/isEven';

gameConsole(0, game, rules);
