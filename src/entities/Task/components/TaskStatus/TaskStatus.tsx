import React from "react";
import type { TaskProps } from "../../types.ts";
import { getStatusText, getStatusClass } from "./helpers";

import styles from './TaskStatus.module.css'

interface StatusProps {
	status: TaskProps["status"];
}

export const TaskStatus: React.FC<StatusProps> = ({ status }) => {

	return (
		<div className='flex items-center justify-between mb-3'>
				<span className={`${styles.status} ${getStatusClass(status)}`}>
					{getStatusText(status)}
				</span>
		</div>
	)
};
