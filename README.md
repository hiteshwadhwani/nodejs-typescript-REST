
# node-express-typescript-REST-API

REST API built with | TypeScript + Nodejs + Express + Prisma (MongoDB) ⚡️



## Authors

- [@hiteshwadhwani](https://www.github.com/hiteshwadhwani)




## Tech Stack

TypeScript,
Node.js,
Express,
Prismsa (MongoDB),
JSON Web Token (JWT),
bcryptjs


## Features

- Complete user authentication
- Users can sign Up
- Users can sign in
- Users can sign out
- Users can create an item
- Users can read an item
- Users can update an item
- Users can delete an item





## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT_NUMBER`
`MONGODB_URL`
`BCRYPT_SALT`
`ACCESS_TOKEN_SECRET_KEY`




## Run Locally

Clone the project

```bash
  git clone https://github.com/hiteshwadhwani/nodejs-typescript-REST
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Publish this schema to your DB
```bash
  npx prisma db push
```

Start the server

```bash
  npm run dev
```


## API Reference

#### Create a user

```http
  POST /user/signup
```

#### Login user

```http
  POST /user/login
```

#### logout user

```http
  POST /user/logout
```
#### create item

```http
  POST /item
```
#### read item

```http
  GET /item/${:id}
```
#### read all items

```http
  GET /item
```
#### update item

```http
  PATCH /item/${:id}
```
#### delete item

```http
  DELETE /item/${:id}
```


