import { Column, H4, H5, Table, Text } from "@components";
import { Link } from "react-router-dom";

export const OrdersPage = ({}: ResetPasswordProps) => {
	const columns: TableColumn[] = [
		{
			key: "ORDER NUMBER",
			title: "ORDER NUMBER",
			dataIndex: "orderNumber",
		},
		{
			key: "DATE",
			title: "DATE",
			dataIndex: "date",
		},
		{
			key: "STATUS",
			title: "STATUS",
			dataIndex: "date",
		},
		{
			key: "TOTAL",
			title: "TOTAL",
			dataIndex: "date",
		},
		{
			key: "ACTIONS",
			title: "ACTIONS",
			render: (_, record: any) => (
				<Text>
					<Link to={record.orderNumber} className="text-accent hover:text-dark-gray">
						View Order
					</Link>
				</Text>
			),
		},
	];

	const dataSource = [
		{
			orderNumber: "7643980998990",
			date: "12/12/2021",
			status: "Delivered",
			total: "$100.00",
		},
		{
			orderNumber: "7643980998990",
			date: "12/12/2021",
			status: "Delivered",
			total: "$100.00",
		},
		{
			orderNumber: "7643980998990",
			date: "12/12/2021",
			status: "Delivered",
			total: "$100.00",
		},
		{
			orderNumber: "7643980998990",
			date: "12/12/2021",
			status: "Delivered",
			total: "$100.00",
		},
		{
			orderNumber: "7643980998990",
			date: "12/12/2021",
			status: "Delivered",
			total: "$100.00",
		},
		{
			orderNumber: "7643980998990",
			date: "12/12/2021",
			status: "Delivered",
			total: "$100.00",
		},
	];

	return <Table columns={columns} dataSource={dataSource} />;
};

// Using for lazy loading page
export default OrdersPage;
