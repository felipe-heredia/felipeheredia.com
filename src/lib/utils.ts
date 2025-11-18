import { format } from "date-fns";
import { ptBR, enUS } from "date-fns/locale";
import { Mail } from "@lucide/astro";

export type Lang = "en" | "pt-br";

export enum PostTag {
	"Docker" = "Docker",
	"Algorítimos" = "Algorítimos",
	"Node.js" = "Node.js",
	"Organização" = "Organização",
	"Produtividade" = "Produtividade",
	"Linguagens" = "Linguagens",
}

export function readingTime(html: string, lang: Lang): string {
	if (!html.trim()) return "";

	const textOnly = html
		.replace(/<[^>]+>/g, " ")
		.replace(/\s+/g, " ")
		.trim();

	const words = textOnly.match(/\b\w+\b/g) || [];
	const wordCount = words.length;

	const readingTimeMinutes = wordCount / 200;
	const roundedReadingTime = Math.ceil(readingTimeMinutes);

	const readTimeTexts = { en: "read time", "pt-br": "minutos" };

	return `${roundedReadingTime} ${readTimeTexts[lang]}`;
}

export function formatDate(date: Date, dateFormat: string, lang: Lang): string {
	const locales = {
		en: enUS,
		"pt-br": ptBR,
	};

	const locale = locales[lang];

	return format(date, dateFormat, { locale });
}

export const footerLinks = [
	{
		iconClass: "devicon-github-original",
		href: "https://github.com/felipe-heredia",
	},
	{
		iconClass: "devicon-linkedin-plain",
		href: "https://linkedin.com/in/f-heredia",
	},
	{
		iconClass: "devicon-twitter-plain",
		href: "https://twitter.com/_felipesuri",
	},
	{
		lucideIcon: Mail,
		href: "mailto:hello@felipeheredia.com",
	},
];

export const skills = [
	{
		name: "Nest.js",
		iconClass: "devicon-nestjs-plain colored",
	},
	{
		name: "TypeScript",
		iconClass: "devicon-typescript-plain colored",
	},
	{
		name: "Node.js",
		iconClass: "devicon-nodejs-plain colored",
	},
	{
		name: "Azure",
		iconClass: "devicon-azure-plain colored",
	},
	{
		name: "PostgreSQL",
		iconClass: "devicon-postgresql-plain colored",
	},
	{
		name: "Redis",
		iconClass: "devicon-redis-plain colored",
	},
	{
		name: "Neovim",
		iconClass: "devicon-neovim-plain colored",
	},
	{
		name: "Linux",
		iconClass: "devicon-linux-plain colored",
	},
	{
		name: "Docker",
		iconClass: "devicon-docker-plain colored",
	},
];

export const certifications = [
	{
		link: "https://www.credly.com/badges/e871a3ed-adc7-4ea5-981f-7b39998bee6b",
		image:
			"https://images.credly.com/size/340x340/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png",
		text: "AWS Certified Cloud Practitioner",
	},
];
