import { Card, CardTitle, CardDescription, CardContent } from './ui/card';
import { Flex } from './ui/flex';
import { StatusBadge } from './statusbadge';

export function TaskCard(props){
	return (
			<>
			<Card class='p-6 m-2'>
			<CardTitle class='mb-5'>
			{props.task.title}
			<StatusBadge class='ml-2' status={props.task.status}/>
			</CardTitle>
			<CardDescription>
			<Flex>
			<div>Subtasks</div>
			</Flex>
			</CardDescription>
			</Card>
			</>
	       );
}
