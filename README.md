# vue-leaflet-resolver
resolver of unplugin-vue-components for vue-leaflet
```javascript
...
import Inspect from "vite-plugin-inspect";
...

export default defineConfig({
        server: {
            port: 8080,
        },
        resolve: {
            alias: {
                '@': resolve(__dirname, 'src') // 设置 `@` 指向 `src` 目录
            }
        },
        base: './',
        plugins: [
            vue(),
            AutoImport({
                imports: [
                    'vue',
                    'vue-router',
                    '@vueuse/core',
                    'pinia',
                ]
            }),
            Components({
                resolvers: [
                    LeafLetResolver
                ],
            }),
        ],
})
```
