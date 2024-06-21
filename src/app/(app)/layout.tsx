import { Inter as FontSans } from "next/font/google";

import type { Metadata } from "next";

import { cn } from "@/lib/utils";

import "@/app/globals.css";

const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
	title: "Payload CMS Starter Template",
	description: "Starter template for Payload CMS projects using Tailwind CSS.",
};

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
	return (
		<html lang="en">
			<body className={cn("font-sans antialiased", fontSans.variable)}>{children}</body>
		</html>
	);
};

export default RootLayout;
