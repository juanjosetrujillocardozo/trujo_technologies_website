# ---- build stage ----
FROM node:20-alpine AS builder
WORKDIR /app

# deps first for cache
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# app source
COPY . .
RUN yarn build

# ---- runtime stage ----
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

# only what we need to run
COPY --from=builder /app/package.json /app/yarn.lock ./
RUN yarn install --frozen-lockfile --production

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

EXPOSE 3000
CMD ["yarn", "start"]
