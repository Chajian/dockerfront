import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
	server:{
		host: '192.168.0.107'
	},
	plugins: [vue()]
})
