// vite.config.ts
import react from "file:///D:/MEMORIA/memoria/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { defineConfig } from "file:///D:/MEMORIA/memoria/node_modules/vite/dist/node/index.js";
import viteTsconfigPaths from "file:///D:/MEMORIA/memoria/node_modules/vite-tsconfig-paths/dist/index.js";
var vite_config_default = defineConfig({
  plugins: [react(), viteTsconfigPaths()],
  base: "/react-memory-game/",
  server: {
    open: true,
    port: 3e3
  },
  resolve: {
    alias: {
      "@memo": "src/@memo"
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxNRU1PUklBXFxcXG1lbW9yaWFcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXE1FTU9SSUFcXFxcbWVtb3JpYVxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovTUVNT1JJQS9tZW1vcmlhL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0JztcbmltcG9ydCB7ZGVmaW5lQ29uZmlnfSBmcm9tICd2aXRlJztcbmltcG9ydCB2aXRlVHNjb25maWdQYXRocyBmcm9tICd2aXRlLXRzY29uZmlnLXBhdGhzJztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW3JlYWN0KCksIHZpdGVUc2NvbmZpZ1BhdGhzKCldLFxuICBiYXNlOiAnL3JlYWN0LW1lbW9yeS1nYW1lLycsXG4gIHNlcnZlcjoge1xuICAgIG9wZW46IHRydWUsXG4gICAgcG9ydDogMzAwMCxcbiAgfSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICAnQG1lbW8nOiAnc3JjL0BtZW1vJyxcbiAgICB9LFxuICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQThPLE9BQU8sV0FBVztBQUNoUSxTQUFRLG9CQUFtQjtBQUMzQixPQUFPLHVCQUF1QjtBQUU5QixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTLENBQUMsTUFBTSxHQUFHLGtCQUFrQixDQUFDO0FBQUEsRUFDdEMsTUFBTTtBQUFBLEVBQ04sUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLFNBQVM7QUFBQSxJQUNYO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
