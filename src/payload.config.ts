import path from "path";
import sharp from "sharp";
import { buildConfig } from "payload";
import { fileURLToPath } from "url";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { mongooseAdapter } from "@payloadcms/db-mongodb";

import { Users } from "@/collections/users";
import { Media } from "@/collections/media";

const fileName = fileURLToPath(import.meta.url);
const databaseURI = process.env.DATABASE_URI!;
const directoryName = path.dirname(fileName);
const payloadSecret = process.env.PAYLOAD_SECRET!;

export default buildConfig({
	admin: {
		user: Users.slug,
	},
	collections: [Users, Media],
	db: mongooseAdapter({ url: databaseURI }),
	editor: lexicalEditor(),
	plugins: [],
	secret: payloadSecret,
	sharp,
	typescript: { outputFile: path.resolve(directoryName, "payload-types.ts") },
});
