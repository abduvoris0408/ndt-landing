const MONTHS: Record<string, string[]> = {
  uz: [
    "yanvar",
    "fevral",
    "mart",
    "aprel",
    "may",
    "iyun",
    "iyul",
    "avgust",
    "sentabr",
    "oktabr",
    "noyabr",
    "dekabr",
  ],
  ru: [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря",
  ],
  en: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
};

export function formatDate(isoDate: string, locale: string) {
  const [year, month, day] = isoDate.split("-").map(Number);
  const months = MONTHS[locale] ?? MONTHS.en;
  const monthName = months[month - 1];

  if (locale === "ru") return `${day} ${monthName} ${year} г.`;
  if (locale === "uz") return `${day}-${monthName}, ${year}`;
  return `${monthName} ${day}, ${year}`;
}
