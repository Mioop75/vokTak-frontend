import { ThemeProvider } from './providers/ThemeProvider';
import Router from './Router';

function App() {
	return (
		<ThemeProvider>
			<Router />
		</ThemeProvider>
	);
}

export default App;
