#!/usr/bin/env node
import { gameConsole } from '..';
import { rules, game } from '../games/progression';

gameConsole(0, game, rules);
