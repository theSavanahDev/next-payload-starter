import type { CollectionConfig } from "payload";

export const Media: CollectionConfig = {
	slug: "media",
	access: {
		read: () => true,
	},
	labels: {
		singular: "Media",
		plural: "Media",
	},
	upload: {
		imageSizes: [
			{
				name: "thumbnail",
				width: 400,
				height: 400,
				position: "centre",
			},
			{
				name: "card",
				width: 600,
				height: 800,
				position: "centre",
			},
			{
				name: "banner",
				width: 1200,
				height: 630,
				position: "centre",
			},
		],
		adminThumbnail: "thumbnail",
		mimeTypes: ["image/*"],
		resizeOptions: {
			width: 2160,
		},
	},
	fields: [
		{
			name: "alt",
			type: "text",
			required: true,
		},
	],
};
