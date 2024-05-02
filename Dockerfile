FROM node:18-alpine
WORKDIR /app
COPY . .
# 安装依赖项
RUN npm install

# 构建项目
RUN npm run build

CMD [ "npm","run","preview"]