import React from "react";
import {formatDate} from "../../../../../../helpers";

interface StatusProps {
	date?: Date;
	period: "start" | "end";
}

export const TaskDate: React.FC<StatusProps> = ({ date, period }) => {

	if (!date) {
		return null;
	}

	return (
		<div className='flex items-center gap-1'>
			<svg
				className='w-3 h-3'
				fill='none'
				stroke='currentColor'
				viewBox='0 0 24 24'
			>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth={2}
					d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
				/>
			</svg>

			<span>{period === "start" ? "Начало:" : "Конец:"  } {formatDate(date)}</span>
		</div>
	)
};

