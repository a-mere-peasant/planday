import type {Component} from 'solid-js'
import { TaskList } from './components/tasklist';
import { useTaskContext } from './context/TaskContext';
import {Tabs, TabsList, TabsTrigger, TabsContent, TabsIndicator } from './components/ui/tabs';
import { Task } from './components/task';

const App: Component = () => {
	const {tasks} = useTaskContext();
	console.log(tasks.taskList.find(t=>t.tid==tasks.current));
	return (
			<>
			<Tabs defaultValue="current">
				<TabsContent value="tasklist">
					<TaskList taskList ={tasks.taskList}/>
				</TabsContent>
				<TabsContent value = "current">
					<Task task = {tasks.taskList.find(t=>t.tid==tasks.current)} />
				</TabsContent>
				<div class='absolute inset-x-0 bottom-0 flex bs-slate-900/75 bg-[#111]'>
					<TabsTrigger value="tasklist" class='min-w-[50%] p-6'>Tasks</TabsTrigger>
					<TabsTrigger value="current" class='min-w-[50%] p-6'>Current</TabsTrigger>
				</div>
			</Tabs>
			</>
	       );
};

export default App;
