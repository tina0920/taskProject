import { ViteSSG } from 'vite-ssg';
import { setupLayouts } from 'virtual:generated-layouts';
import Previewer from 'virtual:vue-component-preview';
import App from './App.vue';
import generatedRoutes from '~pages';
// import '@/assets/scss/main.scss';
import '@unocss/reset/tailwind.css';
import './styles/main.css';
import 'uno.css';
const routes = setupLayouts(generatedRoutes);
// https://github.com/antfu/vite-ssg
export const createApp = ViteSSG(App, { routes, base: import.meta.env.BASE_URL }, (ctx) => {
    // install all modules under `modules/`
    Object.values(import.meta.glob('./modules/*.ts', { eager: true }))
        .forEach(i => i.install?.(ctx));
    ctx.app.use(Previewer);
});
