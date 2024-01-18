

export type Status = 'Todo' | 'Done' | 'Inactive' | 'Current';

export interface TaskInfo{
	tid : string,
	title :string,
	status : Status,
	subtasks : string[],
	parent : string,
	description :string
}
