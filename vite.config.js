import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/mlops-fastapi_demo/', // 仓库名字！前后斜杠不能丢
  plugins: [react()],
})
