FROM docker.io/library/node:17-alpine AS build

WORKDIR /app/source

COPY package.json pnpm-lock.yaml ./

RUN npm install --global npm@8 && npm install --global pnpm@6 && pnpm install

COPY . .

RUN pnpm run build

FROM docker.io/library/node:17-alpine

RUN apk add --update-cache --no-cache --force-refresh tini && rm -rf /var/cache/apk/* && npm install --global npm@8 && npm install --global pnpm@6 pm2@5

USER node

COPY --from=build --chown=node:node /app/source/build /home/node/app

WORKDIR /home/node/app

RUN pnpm install --prod

ENTRYPOINT [ "/sbin/tini", "--" ]

CMD [ "pm2", "start", "ecosystem.config.json", "--no-daemon" ]
