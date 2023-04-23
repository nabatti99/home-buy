import { Row } from "@components";
import { joinCls } from "@utilities";
import { forwardRef } from "react";

export const StarRating = forwardRef<HTMLDivElement, StarRatingProps>(({ onRate, selectedStars, totalStars, enabled = false, className, children, ...props }, ref) => {
	const unselectedStars = totalStars - selectedStars;
	return (
		<Row className={joinCls("gap-2", className)} {...props}>
			{[...Array(selectedStars)].map((_, index) => (
				<i key={index} className={joinCls("ri-star-fill", enabled && "hover:text-accent cursor-pointer")} />
			))}
			{[...Array(unselectedStars)].map((_, index) => (
				<i key={index} className={joinCls("ri-star-line", enabled && "hover:text-accent cursor-pointer")} />
			))}
		</Row>
	);
});
