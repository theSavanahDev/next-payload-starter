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
		adminThumbnail: "thumbnail",
		imageSizes: [
			{
				name: "thumbnail",
				width: 400,
				height: 300,
				position: "centre",
			},
			{
				name: "card",
				width: 768,
				height: 1024,
				position: "centre",
			},
			{
				name: "banner",
				width: 1280,
				height: 850,
				position: "centre",
			},
		],
		mimeTypes: ["application/pdf", "image/*"],
		resizeOptions: {
			width: 1280,
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
