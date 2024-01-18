import type {Component} from 'solid-js';
import { For } from 'solid-js';
import { TaskList } from './components/tasklist';
import { useTaskContext } from './context/TaskContext';
import { TaskCard } from './components/taskcard';

const App: Component = () => {
	const {tasks} = useTaskContext();
	return (
			<>
			<TaskList taskList ={tasks} />
			</>
	       );
};

export default App;
