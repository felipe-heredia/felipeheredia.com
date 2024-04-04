import { format } from "date-fns";
import { ptBR, enUS } from "date-fns/locale";
import { Mail } from "lucide";

export type Lang = "en" | "pt-br";

export enum PostTag {
  "Docker" = "Docker",
  "Algorítimos" = "Algorítimos",
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

  const readTimeTexts = { en: "read time", "pt-br": "tempo de leitura" };

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
