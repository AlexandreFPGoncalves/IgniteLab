// import {EventPlayerHelper} from "./EventPlayer.helper"

import { Header, Sidebar, VideoPlayer } from '../../components';

export const EventPlayer = () => {
	return (
		<div className="flex flex-col min-h-screen">
			<Header />
			<main className="flex flex-1">
				<VideoPlayer />
				<Sidebar />
			</main>
		</div>
	);
};
