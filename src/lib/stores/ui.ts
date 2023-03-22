import { writable } from 'svelte/store';
import moment from 'moment';

export const date = writable<Date>(new Date());

export const player = writable<boolean>(false);
