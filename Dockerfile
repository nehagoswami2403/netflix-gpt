FROM node:18-alpine

WORKDIR /netflix-gpt/

RUN npx create-react-app netflix-gpt

CMD ["npm", "start"]
