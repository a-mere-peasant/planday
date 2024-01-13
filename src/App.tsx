import { Suspense, type Component } from 'solid-js';
import { Button } from './components/ui/button';
import { ColorModeProvider, ColorModeScript, useColorMode } from '@kobalte/core';

const App: Component = () => {
  return (
  	<>
  		<Button>Hey</Button>
	</>
  );
};

export default App;
