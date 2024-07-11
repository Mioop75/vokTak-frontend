import { ThemeProvider } from './components/shared/ThemeProvider';
import Router from './Router';

function App() {
	return (
		<ThemeProvider>
			<Router />
		</ThemeProvider>
	);
}

export default App;
