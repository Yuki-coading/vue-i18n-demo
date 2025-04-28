<template>
  <div class="language-switcher">
    <!-- <label for="language-select">{{ $t("message.language") }}:</label> -->
    <select id="language-select" v-model="currentLocale" @change="changeLocale">
      <option value="ja">日本語</option>
      <option value="en">English</option>
      <option value="zh">中文</option>
      <option value="ar">العربية</option>
      <option value="ru">Русский</option>
    </select>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useI18n } from "vue-i18n";

const { locale } = useI18n();
const currentLocale = ref(locale.value);

function changeLocale() {
  locale.value = currentLocale.value;
  // HTML要素のdir属性を設定（RTL言語用）
  document.documentElement.dir = currentLocale.value === "ar" ? "rtl" : "ltr";
  // lang属性も設定
  document.documentElement.lang = currentLocale.value;
}

// マウント時にもdirとlangを設定
watch(
  () => currentLocale.value,
  () => {
    changeLocale();
  },
  { immediate: true }
);
</script>

<style scoped>
.language-switcher {
  margin: 1rem 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

select {
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  background-color: #f9f9f9;
  cursor: pointer;
}

label {
  font-weight: bold;
}
</style>
