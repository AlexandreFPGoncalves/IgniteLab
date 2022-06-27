import { CheckCircle, Lock } from 'phosphor-react';
import { isPast, format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { Link } from 'react-router-dom';

interface LessonCardProps {
	title: string;
	slug: string;
	availableAt: Date;
	type: 'live' | 'class';
}

export const LessonCard: React.FC<LessonCardProps> = ({ title, slug, availableAt, type }) => {
	const isLessonAvailable = isPast(availableAt);
	const availableDateFormatted = format(availableAt, "EEEE' • 'd ' de ' MMMM ' • ' k'h'mm", { locale: pt });
	return (
		<Link to={`/event/lesson/${slug}`} className="group">
			<span className="text-base-subtext">{availableDateFormatted}</span>

			<div className="border border-base-strokeDivider rounded p-4 mt-2 transition-colors group-hover:border-product-green">
				<header className="flex items-center justify-between ">
					{isLessonAvailable ? (
						<span className="text-sm text-product-blue font-medium flex items-center gap-2">
							<CheckCircle size={20} />
							Conteúdo Liberado
						</span>
					) : (
						<span className="text-sm text-product-warning font-medium flex items-center gap-2">
							<Lock size={20} />
							Em Breve
						</span>
					)}

					<span className="text-xs rounded px-2 py-[2px] border-product-greenLight border text-white font-bold">
						{type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
					</span>
				</header>

				<strong className="text-base-title mt-5 block">{title}</strong>
			</div>
		</Link>
	);
};
