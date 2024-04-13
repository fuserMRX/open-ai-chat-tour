# Next.js + OpenAI App

## Functionality of the application

- This application will allow create/fetch new tours with the help of AI.
- A user can communicate with AI in a chat - token limitation is added too in order to control available OpenAI API number of tokens
- A user can login by using gmail or email and password separately.
- User's info can be managed in a separate window.

![Static Badge](https://img.shields.io/badge/build--1.0.0-nextjsOpenAIApp-brightgreen)

### Additional features

* **[Render](https://render.com/)** `platform` was used to instantiate `PostgreSQL` 🔥 that is used to save tour queries in order not to do the same requests to OpenAI API
* **[Clerk](https://clerk.com/)** platform ✨ was used  to simplify  process of a user login via google and to beautify user interface for sign in and sign out
* **[Unsplash](https://unsplash.com/)** was used to generate photo for a tour - cheaper solution to OpenAI API for images
* **[Prisma](https://www.prisma.io/)** was used to simplify communication between app and `PostgreSQL`

### Installation instructions

- **npm install**
- **npm run dev** - start project locally
- `node version` should not be more than **v18**
