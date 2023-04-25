import { Column, Grid, H3, H4, H5, Input, Row, Select, Table, Text } from "@components";
import { Link } from "react-router-dom";

export const PaymentsPage = ({}: PaymentsPageProps) => {
	return (
		<Grid className="grid-cols-2 grid-rows-1 gap-20">
			<Column className="gap-8">
				<H3>Billing Address</H3>

				<Grid className="grid-cols-2 grid-rows-1 gap-10">
					<Input placeholder="First Name *" />
					<Input placeholder="Last Name *" />
				</Grid>

				<Input placeholder="Company Name" />

				<Select options={[{ label: "Viet Nam", value: "1" }]} onChange={console.log} placeholder="Country *" />

				<Input placeholder="Street Address *" />

				<Input placeholder="Postcode / ZIP *" />

				<Input placeholder="Town / City *" />

				<Input placeholder="Phone *" />

				<Input placeholder="Email *" />
			</Column>

			<Column className="gap-8">
				<H3>Shipping Address</H3>

				<Input placeholder="Address *" />
			</Column>
		</Grid>
	);
};

// Using for lazy loading page
export default PaymentsPage;
