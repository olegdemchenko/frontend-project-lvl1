#!/usr/bin/env node
import { gameConsole } from '..';
import { rules, game } from '../games/gcd';

gameConsole(0, game, rules);
