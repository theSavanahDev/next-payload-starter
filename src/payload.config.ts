import path from "path";
import sharp from "sharp";
import { buildConfig } from "payload";
import { fileURLToPath } from "url";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { uploadthingStorage } from "@payloadcms/storage-uploadthing";

import { Users } from "@/collections/users";
import { Media } from "@/collections/media";

import Icon from "@/components/payload/label-icon";
import Logo from "@/components/payload/label-logo";

const fileName = fileURLToPath(import.meta.url);
const databaseURI = process.env.DB_URI_PRD!;
const directoryName = path.dirname(fileName);
const payloadSecret = process.env.PAYLOAD_SECRET!;
const uploadthingSecret = process.env.UPLOADTHING_SECRET!;

export default buildConfig({
	admin: {
		user: Users.slug,
		meta: {
			titleSuffix: " | Payload",
			icons: [{ url: "/icon.svg" }],
		},
		components: {
			graphics: { Icon, Logo },
		},
	},
	collections: [Users, Media],
	db: mongooseAdapter({ url: databaseURI }),
	editor: lexicalEditor({}),
	plugins: [
		uploadthingStorage({
			collections: {
				[Media.slug]: true,
			},
			options: {
				apiKey: uploadthingSecret,
				acl: "public-read",
			},
		}),
	],
	secret: payloadSecret,
	sharp,
	typescript: { outputFile: path.resolve(directoryName, "payload-types.ts") },
});
