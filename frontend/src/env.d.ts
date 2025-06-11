/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'vue-router' {
  import type { RouteRecordRaw } from 'vue-router'
  export * from 'vue-router'
  export { RouteRecordRaw }
} 