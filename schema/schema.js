const graphql = require('graphql');

const {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString
} = graphql;

// What a User Looks like
const UserType = new GraphQLObjectType({
    name: 'User',
    fields: {
        id: { type: GraphQLString },
        firstName: { type: GraphQLString },
        age: { type: GraphQLInt }
    }
});