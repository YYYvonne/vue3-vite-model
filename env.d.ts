/// <reference types="vite/client" />
declare var GLOBAL_VAR;
declare module '@/lang/zh';
declare module '*.svg?component' {
  import { FunctionalComponent, SVGAttributes } from 'vue';
  const src: FunctionalComponent<SVGAttributes>;
  export default src;
}

declare module 'keymaster';
declare module '*.vue' {
  import { App, defineComponent } from 'vue';
  const component: ReturnType<typeof defineComponent> & {
    install(app: App): void;
  };
  export default component;
}
