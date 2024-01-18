import { createSignal, splitProps} from "solid-js";
import { Badge } from "./ui/badge";
import { cn } from "~/lib/utils";


export function StatusBadge(props){
	const statusStyles = {
		'Todo' : 'txt-blue-950 bg-blue-300',
		'Active' : 'txt-blue-950 bg-blue-300',
		'Inactive' : 'txt-blue-950 bg-blue-300',
		'Current' : 'txt-blue-950 bg-blue-300',
		'Done' : 'txt-blue-950 bg-blue-300',
	}
  	const [, rest] = splitProps(props, ["class"])
	return <Badge
		class={cn( statusStyles[props.status],props.class)}>
	{props.number} {props.status}
		</Badge>
}
