const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');


const app = express()

// bind express with graphql
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));


app.listen(4000,()=>{
    console.clear()
    console.log("Server is running properly")
})