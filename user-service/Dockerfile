FROM node:18-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5002
ENV NODE_ENV=production
CMD ["node", "index.js"]
