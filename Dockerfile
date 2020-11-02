FROM node:alpine 

# switch to workdir /app
WORKDIR /app 

# copy package.json to this workdir
COPY package.json . 

# run npm install
RUN npm install --only=prod

# copy Jobstar app code
COPY . . 

# start server
CMD ["npm", "start"]
