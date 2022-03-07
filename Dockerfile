# todo: better dockerization by refactoring
# https://hub.docker.com/r/denoland/deno
FROM denoland/deno:alpine-1.14.1

RUN apk update && apk add curl

COPY . .

ENTRYPOINT ["deno"]

CMD ["run", "--unstable", "--allow-read", "--allow-write", "scripts/copy.js"]
CMD ["run", "--unstable", "--allow-read", "--allow-write", "--allow-run", "scripts/build.js"]
CMD ["run", "--unstable", "--allow-all", "scripts/server.js"]
