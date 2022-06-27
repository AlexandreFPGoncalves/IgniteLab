import { Routes, Route } from 'react-router-dom';
import { EventPlayer } from './screens';

export function Router() {
	return (
		<Routes>
			<Route path="/" element={<h1>Home</h1>} />
			<Route path="/event" element={<EventPlayer />} />
			<Route path="/event/lesson/:slug" element={<EventPlayer />} />
		</Routes>
	);
}
