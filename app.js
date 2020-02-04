const express = require('express')
const graphql = require('graphql')
const {GraphQLObjectType,GraphQLString} = graphql
const BookType = new GraphQLObjectType({
    name:'Book'
    fields: () =>({
            id: { type: GraphQLString },
            name: { type: GraphQLString },
            genre: { type: GraphQLString }
        })
})
const app = express()

app.listen(4000,()=>{
    console.log("Server is running properly")
})