/* @refresh reload */
import './index.css';
import { render } from 'solid-js/web';

import App from './App';
import { ColorModeProvider } from '@kobalte/core';
import { TaskContextProvider } from './context/TaskContext';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

render(() => <ColorModeProvider defaultScheme="dark">
			<TaskContextProvider>
				<App />
			</TaskContextProvider>
		</ColorModeProvider>, root!);
