FROM node:22.14.0-alpine

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --ignore-scripts --no-audit --no-fund
COPY . .

ENV NODE_ENV=production
ENV PORT=4173
EXPOSE 4173

CMD ["node", "server.js"]
