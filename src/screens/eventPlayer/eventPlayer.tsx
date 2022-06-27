// import {EventPlayerHelper} from "./EventPlayer.helper"

import { useParams } from 'react-router-dom';
import { Header, Sidebar, VideoPlayer } from '../../components';

export const EventPlayer = () => {
	const { slug } = useParams<{ slug: string }>();

	return (
		<div className="flex flex-col min-h-screen">
			<Header />
			<main className="flex flex-1">
				{slug ? <VideoPlayer lessonSlug={slug} /> : <div className="flex-1" />}

				<Sidebar />
			</main>
		</div>
	);
};
