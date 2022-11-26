const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const server = express();
const port = 8080;

//import routers
const AuthsRouter = require('./routers/routerAuths')
const PetsRouter = require('./routers/routerPetUsers')
const PostsRouter = require('./routers/routerPosts')

server.use(express.json())
server.use(morgan('dev'));
server.use(cors());
server.use(bodyParser.json());
server.use(helmet());

mongoose.connect('mongodb+srv://petly_user:dictmerng2@cluster0.dfs2tzl.mongodb.net/petly?retryWrites=true&w=majority', { useNewUrlParser: true });

server.get('/', (request, response) => {
    response.send(`Welcome to API`);
});

server.use('/pets', PetsRouter)
server.use('/auth', AuthsRouter)
server.use('/posts', PostsRouter)

server.listen(
    port,
    () => {
        console.log(`Server running on port ${port}`);
    }
);