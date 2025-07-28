import React, {type ChangeEvent} from 'react'
import { useUnit } from "effector-react";
import { updateStartFilterDate, updateEndFilterDate } from "./model.ts";

export const TaskDateFilter: React.FC = () => {
	const updateStartFilterDateEvent = useUnit(updateStartFilterDate);
	const updateEndFilterDateEvent = useUnit(updateEndFilterDate);

	const changeStartDate = (e: ChangeEvent<HTMLInputElement>) => {
		if (!e.target.value) {
			updateStartFilterDateEvent(null);
		} else {
			updateStartFilterDateEvent(new Date(e.target.value));
		}
	}

	const changeEndDate = (e: ChangeEvent<HTMLInputElement>) => {
		if (!e.target.value) {
			updateEndFilterDateEvent(null);
		} else {
			updateEndFilterDateEvent(new Date(e.target.value));
		}
	}

	return (
		<div className="space-y-4 flex gap-4">
			<label className="block">
				<span className="block text-sm font-medium mb-1">Дата начала</span>

				<input
					type="date"
					onChange={changeStartDate}
					className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm dark:bg-gray-800 dark:text-white"
				/>
			</label>

			<label className="block">
				<span className="block text-sm font-medium mb-1">Дата окончания</span>

				<input
					type="date"
					className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm dark:bg-gray-800 dark:text-white"
					onChange={changeEndDate}
				/>
			</label>
		</div>
	);
}
