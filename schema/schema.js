const graphql = require('graphql')
const {GraphQLObjectType,GraphQLString,GraphQLSchema} = graphql
const BookType = new GraphQLObjectType({
    name:'Book',
    fields: () =>({
            id: { type: GraphQLString },
            name: { type: GraphQLString },
            genre: { type: GraphQLString }
        })
})
const RootQuery =new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        book: BookType,
        args:{id :{type: GraphQLString}},
        resolver(parent,args){
            //Code
        }
        
    }
})


module.exports =  new GraphQLSchema({
    query: RootQuery
})