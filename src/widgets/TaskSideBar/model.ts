import { createEvent, createStore } from 'effector';

export const closeTaskSideBar = createEvent();
export const openTaskSideBar = createEvent();

export const $taskSidebarShown = createStore<boolean>(false)
	.on(openTaskSideBar, () => true)
	.on(closeTaskSideBar, () => false)