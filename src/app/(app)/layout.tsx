import type { Metadata } from "next";

import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Payload CMS Starter Template",
	description: "Starter template for Payload CMS projects using Tailwind CSS.",
};

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
};

export default RootLayout;
