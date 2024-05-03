import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, loadEnv } from 'vite'


export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [sveltekit()],
    server: {
      host: '0.0.0.0',
      port: 4000,
      proxy: {
        '/api': {
          target: env.SERVICE_URL,
          changeOrigin: true,  //是否跨域
          secure: false,  //是否https接口
          // rewrite: path => path;
        }
      }
    }
  }
});
