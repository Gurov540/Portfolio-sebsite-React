import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// Импортируем resolve из path и утилиты для работы с URL
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

// 💡 Определяем __dirname для корректной работы в ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      // @ - это alias для папки src
      "@": resolve(__dirname, "src"),

      // Настройка алиасов для FSD слоев:
      "@app": resolve(__dirname, "src/app"),
      "@pages": resolve(__dirname, "src/pages"),
      "@widgets": resolve(__dirname, "src/widgets"),
      "@features": resolve(__dirname, "src/features"),
      "@entities": resolve(__dirname, "src/entities"),
      "@shared": resolve(__dirname, "src/shared"),
    },
  },

  // 🛠️ Конфигурация для деплоя на GitHub Pages
  base: "/Website-Portfolio-v2/", // Укажите имя вашего репозитория
});
