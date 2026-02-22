FROM node:20-alpine AS builder

WORKDIR /app
COPY . .

# enable modern yarn (berry)
RUN corepack enable
RUN corepack prepare yarn@4.2.2 --activate

RUN yarn install
RUN yarn build

FROM node:20-alpine AS runner
WORKDIR /app

COPY --from=builder /app ./

ENV NODE_ENV=production
EXPOSE 3000

CMD ["yarn","start"]
