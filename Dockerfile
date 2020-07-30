FROM alpine:latest
RUN apk add nodejs
WORKDIR /srv
ADD app.tar .
USER 1000:1000
CMD node discord-voice-channel-bot.js
