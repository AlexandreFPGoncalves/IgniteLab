import { DefaultUi, Player, Youtube } from '@vime/react';
import { CaretRight, DiscordLogo, FileArrowDown, Lightning } from 'phosphor-react';
import { gql, useQuery } from '@apollo/client';
import '@vime/core/themes/default.css';

const GET_LESSON_BY_SLUG_QUERY = gql`
	query MyQuery($slug: String) {
		lesson(where: { slug: $slug }) {
			title
			videoId
			description
			teacher {
				name
				bio
				avatarURL
			}
		}
	}
`;

interface VideoPlayerProps {
	lessonSlug: string;
}
interface GetLessonBySlugResponse {
	lesson: {
		videoId: string;
		title: string;
		description: string;
		teacher: { name: string; bio: string; avatarURL: string };
	};
}
export const VideoPlayer: React.FC<VideoPlayerProps> = ({ lessonSlug }) => {
	const { data } = useQuery<GetLessonBySlugResponse>(GET_LESSON_BY_SLUG_QUERY, {
		variables: {
			slug: lessonSlug,
		},
	});
	if (!data) {
		return (
			<div className="flex-1">
				<p>Loading....</p>
			</div>
		);
	}
	return (
		<div className="flex-1">
			<div className="bg-black flex justify-center">
				<div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
					<Player>
						<Youtube videoId={data.lesson.videoId} />
						<DefaultUi />
					</Player>
				</div>
			</div>

			<div className="p-8 max-w-[1100px] mx-auto">
				<div className="flex items-start gap-16">
					<div className="flex-1">
						<h1 className="text-2xl font-bold ">{data.lesson.title}</h1>
						<p className="mt-4 text-base-subtext leading-relaxed">{data.lesson.description}</p>

						<div className="flex items-center gap-4 mt-6">
							<img
								className="h-16 w-16 rounded-full border-2 border-product-blue"
								src={data.lesson.teacher.avatarURL}
								alt=""
							/>

							<div className="leading-relaxed">
								<strong className="font-bold text-2xl block">{data.lesson.teacher.name}</strong>
								<span className="text-product-title text-sm block">{data.lesson.teacher.bio}</span>
							</div>
						</div>
					</div>

					<div className="flex flex-col gap-5">
						<a
							href=""
							className="p-4 text-sm bg-product-green flex items-center rounded font-bold uppercase gap-2 justify-center text-white hover:bg-product-greenDark transition-colors"
						>
							<DiscordLogo size={24} />
							Comunidade do Discord
						</a>
						<a
							href=""
							className="p-4 text-sm border border-product-blue flex items-center rounded font-bold uppercase gap-2 justify-center transition-colors text-product-blue hover:bg-product-blue hover:text-base-elements"
						>
							<Lightning size={24} />
							Acesse o desafio
						</a>
					</div>
				</div>

				<div className="gap-8 mt-20 grid grid-cols-2">
					<a
						href=""
						className="bg-base-elements rounded overflow-hidden flex items-stretch gap-6 transition-colors hover:bg-base-bars"
					>
						<div className="bg-product-greenDark h-full p-6 flex items-center">
							<FileArrowDown size={40} />
						</div>
						<div className="py-6 leading-relaxed">
							<strong className="text-2xl">Material Complementar</strong>
							<p className="text-sm text-base-title mt-2">
								Acesse o material complementar para acelerar o seu desenvolvimento
							</p>
						</div>
						<div className="h-full p-6 flex items-center">
							<CaretRight size={24} />
						</div>
					</a>

					<a
						href=""
						className="bg-base-elements rounded overflow-hidden flex items-stretch gap-6 transition-colors hover:bg-base-bars"
					>
						<div className="bg-product-greenDark h-full p-6 flex items-center">
							<FileArrowDown size={40} />
						</div>
						<div className="py-6 leading-relaxed">
							<strong className="text-2xl">Wallpapers exclusivos</strong>
							<p className="text-sm text-base-title mt-2">
								Baixe wallpapers exclusivos do Ignite Lab e personalize a sua m??quina
							</p>
						</div>
						<div className="h-full p-6 flex items-center">
							<CaretRight size={24} />
						</div>
					</a>
				</div>
			</div>
		</div>
	);
};
