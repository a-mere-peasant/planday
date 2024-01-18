import { makePersisted } from "@solid-primitives/storage";
import { createContext, useContext } from "solid-js";
import { createStore } from "solid-js/store";
import { TaskInfo } from "~/interfaces/task";


export const TaskContext = createContext();

export function TaskContextProvider(props){
	const [tasks,setTasks] = createStore([
	{
	tid:'001',
	title:'sometitle',
	status:'Todo',
	subtasks :null,
	description : null,
	parent:null
	}]);
	return(
			<TaskContext.Provider value = {{tasks,setTasks}}>
				{props.children}
			</TaskContext.Provider>
	      )
}

export function useTaskContext(){
	const context = useContext(TaskContext);
	if(!context){
		throw new Error("useTaskContext: cannot find a TaskContext");
	}
	return context;
}
