import {createEvent, createStore} from "effector";

export const updateStartFilterDate = createEvent<Date | null>();
export const updateEndFilterDate = createEvent<Date | null>();

export const $startFilterDate = createStore<Date | null>(null)
	.on(updateStartFilterDate, (_, payload) => payload)

export const $endFilterDate = createStore<Date | null>(null)
	.on(updateEndFilterDate, (_, payload) => payload)