import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import "./style.css";
import App from "./App.vue";

// 翻訳ファイルのインポート
import en from "./locales/en.json";
import zh from "./locales/zh.json";
import ar from "./locales/ar.json";
import ru from "./locales/ru.json";
import ja from "./locales/ja.json";

// i18nインスタンスの作成
const i18n = createI18n({
  legacy: false, // Composition APIを使用する場合はfalse
  locale: "ja", // デフォルト言語を日本語に変更
  fallbackLocale: "en", // フォールバック言語
  messages: {
    en,
    zh,
    ar,
    ru,
    ja,
  },
});

const app = createApp(App);
app.use(i18n);
app.mount("#app");
