# Next.js + OpenAI App

## Functionality of the application

- This application will allow users to create and fetch new tours with the help of AI.
- A user can communicate with AI in a chat - a token limitation is also added to control the available number of OpenAI API tokens.
- Users can log in using Gmail, or with an email and password separately.
- User information can be managed in a separate window.

![Static Badge](https://img.shields.io/badge/build--1.0.0-nextjsOpenAIApp-brightgreen)

### Additional features

* **[Render](https://render.com/)** `platform` 🔥 was used to set up PostgreSQL, which stores tour queries to avoid redundant requests to the OpenAI API
* **[Clerk](https://clerk.com/)** platform ✨ simplifies the user login process via Google and enhances the user interface for signing in and out.
* **[Unsplash](https://unsplash.com/)** 🖼 ️was used to generate photos for tours, offering a more cost-effective solution than the OpenAI API for images
* **[Prisma](https://www.prisma.io/)** 📐 simplifies communication between the app and PostgreSQL

### Installation instructions

- **npm install**
- **npm run dev** - start project locally
- `node version` should be more than **v18**
