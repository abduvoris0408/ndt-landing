"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { FaTelegram } from "react-icons/fa";

const TELEGRAM_URL = "https://t.me/nextdevteam";

export default function ChatWidget() {
  const t = useTranslations("chat");

  return (
    <motion.a
      href={TELEGRAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background shadow-[0_15px_40px_-10px_rgba(0,0,0,0.4)] sm:bottom-6 sm:right-6"
    >
      <FaTelegram size={24} className="text-[#26A5E4]" />
      {t("cta")}
    </motion.a>
  );
}
