import React from "react";
import { getStatusClass } from "./helpers";

import styles from './TaskStatus.module.css'
import type { TaskProps } from "../../../../../../types/TaskTypes";
import {getStatusText} from "../../../../../../helpers";

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
