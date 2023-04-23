interface StarRatingProps extends React.HTMLAttributes<HTMLDivElement> {
	totalStars: number;
	selectedStars: number;
	enabled?: boolean;
	onRate: (rating: number) => void;
}
