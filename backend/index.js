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
const CommentsRouter = require('./routers/routerComments')
const SharedRouter = require('./routers/routerSharedPosts')
const ReactsRouter = require('./routers/routerReacts')
const AllPost_SharedPost = require('./routers/routerPost_SharedPost')

server.use(express.json())
server.use(morgan('dev'));
server.use(cors());
server.use(bodyParser.json());
server.use(helmet());
server.use(bodyParser.urlencoded({
    extended: false}))
server.use('/uploads', express.static("uploads"));


mongoose.connect('mongodb+srv://<user_name>:<password>@cluster0.dfs2tzl.mongodb.net/petly?retryWrites=true&w=majority', { useNewUrlParser: true });

server.get('/', (request, response) => {
    response.send(`Welcome to API`);
});

server.use('/pets', PetsRouter)
server.use('/auth', AuthsRouter)
server.use('/posts', PostsRouter)
server.use('/comments', CommentsRouter)
server.use('/reacts', ReactsRouter)
server.use('/shared', SharedRouter)
server.use('/all', AllPost_SharedPost)

server.listen(port)
    
        console.log(`Server running on port ${port}`);
