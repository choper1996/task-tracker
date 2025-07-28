import { createEvent, createStore } from 'effector';

export const changeSearchTaskValue = createEvent<string>();

export const $searchTaskValue = createStore<string>('')
	.on(changeSearchTaskValue, (_, payload) => payload)


