import React from 'react'
import {useUnit} from "effector-react";
import {$searchTaskValue, changeSearchTaskValue} from "./model.ts";

export const TaskSearch: React.FC = () => {
	const value = useUnit($searchTaskValue);
	const changeSearchTaskValueEvent = useUnit(changeSearchTaskValue);

	const changeHandler = (e: { target: { value: string; }; }) => {
		changeSearchTaskValueEvent(e.target.value);
	};

	return (
		<input
			type='text'
			value={value}
			placeholder='Поиск задач...'
			onChange={changeHandler}
			className='px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 w-full max-w-xs'
		/>
	);
}
