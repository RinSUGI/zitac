// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  modules: ['@nuxt/eslint', '@ant-design-vue/nuxt'],
  ssr: false, // サーバー側ではなく、クライアント側で実行(SSRではなくSPA)
  typescript: {
    typeCheck: true, // ビルド時・開発時に型チェック
  },
});