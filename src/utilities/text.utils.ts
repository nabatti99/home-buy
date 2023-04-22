// Join class names
export function joinCls(...classNames: any[]): string {
	return classNames
		.map((className) => {
			if (typeof className == "string") return className?.trim();
			else return className;
		}) // Remove redundant white spaces
		.filter(Boolean) // Remove falsy items
		.join(" "); // Join with white space;
}

// Generate random image url
export function randomImgUrl(width: number = 2000, height: number = 2000): string {
	const seed = Math.floor(Math.random() * 1000);
	return `https://picsum.photos/${width}/${height}?random=${seed}`;
}
