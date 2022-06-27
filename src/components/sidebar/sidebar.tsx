import { gql, useQuery } from '@apollo/client';
import { LessonCard } from '../lessonCard';

const GET_LESSONS_QUERY = gql`
	query {
		lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
			id
			slug
			title
			availableAt
			lessonType
		}
	}
`;

interface GetLessonsQueryResponse {
	lessons: {
		id: string;
		title: string;
		slug: string;
		availableAt: Date;
		lessonType: 'live' | 'class';
	}[];
}

export const Sidebar = () => {
	const { data } = useQuery<GetLessonsQueryResponse>(GET_LESSONS_QUERY);
	console.log(data);
	return (
		<aside className="w-[348px] bg-base-bars p-6 border-l border-base-strokeDivider">
			<span className="font-bold text-2xl pb-6 mb-6 border-b border-base-strokeDivider block">
				Cronograma de aulas
			</span>

			<div className="flex flex-col gap-8">
				{data?.lessons.map((lesson) => {
					return (
						<LessonCard
							key={lesson.id}
							title={lesson.title}
							slug={lesson.slug}
							availableAt={new Date(lesson.availableAt)}
							type={lesson.lessonType}
						/>
					);
				})}
			</div>
		</aside>
	);
};
