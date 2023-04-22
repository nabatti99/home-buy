import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

export const Title = () => {
	const location = useLocation();

	const title = location.pathname;

	return (
		<Helmet>
			<title>{title}</title>
		</Helmet>
	);
};
