import { Route, Routes } from 'react-router-dom';
import {
	routersWithAuthorization,
	routerWithoutAuthorization,
} from './consts/router.const';
import Layout from './layout/Layout';

export default function Router() {
	return (
		<Routes>
			<Route element={<Layout />}>
				{routersWithAuthorization.map(router => (
					<Route
						key={router.path}
						path={router.path}
						element={router.element}
					/>
				))}
			</Route>
			{routerWithoutAuthorization.map(router => (
				<Route key={router.path} path={router.path} element={router.element} />
			))}
		</Routes>
	);
}
