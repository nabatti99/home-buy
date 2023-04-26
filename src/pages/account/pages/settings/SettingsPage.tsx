import { Button, Column, Grid, H1, H3, H4, H5, Input, Row, Select, Table, Text } from "@components";
import { Link } from "react-router-dom";

export const SettingsPage = ({}: SettingsPageProps) => {
	return (
		<Row className="justify-center">
			<Column className="basis-1/2 gap-8">
				<H1 className="text-center">Account details</H1>

				<Input placeholder="First Name *" />
				<Input placeholder="Last Name *" />

				<Column className="gap-2">
					<Input placeholder="Display name *" />
					<Text className="text-sm text-dark-gray">This will be how your name will be displayed in the account section and in reviews.</Text>
				</Column>

				<Input placeholder="Email address*" />

				<H4>Password change</H4>
				<Input placeholder="Current password (leave blank to leave unchanged)" />

				<Input placeholder="New password (leave blank to leave unchanged)" />

				<Input placeholder="Confirm new password" />

				<Button variant="fill" className="uppercase mt-8">
					Save changes
				</Button>
			</Column>
		</Row>
	);
};

// Using for lazy loading page
export default SettingsPage;
