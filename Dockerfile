FROM docker.io/library/node:17-alpine AS build

WORKDIR /app/source

COPY package.json pnpm-lock.yaml ./

RUN npm install --global npm@8 && npm install --global pnpm@6 && pnpm install

COPY . .

RUN pnpm run build

FROM docker.io/library/node:17-alpine

RUN apk add --update-cache --no-cache --force-refresh tini && rm -rf /var/cache/apk/* && npm install --global npm@8 && npm install --global pnpm@6

USER node

WORKDIR /home/node/app

COPY --from=build /app/source/build /home/node/app

RUN pnpm install --prod

ENTRYPOINT [ "/sbin/tini", "--" ]

CMD [ "node", "src/main.js" ]
