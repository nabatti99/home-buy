import { Column, H5 } from "@components";
import { Link } from "react-router-dom";

export const DashboardPage = ({}: ResetPasswordProps) => {
	return (
		<Column className="gap-2">
			<H5>
				Hello Vitatheme
				<span className="text-dark-gray">
					{" "}
					(not Vitatheme?{" "}
					<Link to="/" className="text-accent hover:text-in-gray">
						Log out
					</Link>
					)
				</span>
			</H5>
			<H5>
				From your account dashboard you can view your{" "}
				<Link to="/" className="text-accent hover:text-in-gray">
					recent orders
				</Link>
				, manage your{" "}
				<Link to="/" className="text-accent hover:text-in-gray">
					shipping and billing addresses
				</Link>
				, and edit your{" "}
				<Link to="/" className="text-accent hover:text-in-gray">
					password and account details
				</Link>
				.
			</H5>
		</Column>
	);
};

// Using for lazy loading page
export default DashboardPage;
