FROM node:18-alpine
WORKDIR /app
COPY . .
RUN  install --production
CMD [ "npx vite prod --host"]