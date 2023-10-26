# Rpg-chat-board

Rpg-chat-board is an application for tabletop RPG players, with the aim of providing a platform for character sheets creation, chat for conversations, and dice rolling. Since it's in an early stage, considering I'm developing it alone and the lack of skills, the application is being built as PC-first, but it aims to become multiplatform.

### Technologies
The technologies used will be divided between the client and server, or more precisely, frontend and backend, with two databases as the data layer.

1. Client/Front-end 
   - Node 
   - Vue 3
   - Pinia - Store & State Managment
   - Routing - For SPA routing.

2. Server/Back-end
   - Node
   - Nest.js - At now,the only framework which has Websocket and REST API.
   - Socket.io - Real-time-data framework for the chat session.
3.
   - MongoDB - NoSQL intended to save chat sessions, users sheet, and sessions id.
   - Redis-json - In-Memory storage/db, inteded to keep the chat sessions and sheet of users.


## Installation

For now, there are only instructions for installing the project for development purposes.

1. Clone the project

```bash
git clone [this-link-project]
```

2. Install dependencies.
```bash
npm install
```

3. Run the project as dev.
```bash
npm run dev
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)

