import type { CollectionConfig } from "payload";

export const Users: CollectionConfig = {
	slug: "users",
	labels: {
		singular: "User",
		plural: "Users",
	},
	admin: {
		defaultColumns: ["email", "name"],
		useAsTitle: "name",
	},
	auth: true,
	fields: [
		{
			name: "name",
			label: "Name",
			type: "text",
			required: true,
		},
	],
};
