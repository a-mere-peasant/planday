import { For } from "solid-js"
import { TaskCard } from "./taskcard"

export function TaskList(props){
		return <>
		<For each={props.taskList}>
		{(item)=><TaskCard task={item} />}
		</For>
		</>
}
