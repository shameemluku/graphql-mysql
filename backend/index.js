const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schema/type-defs");
const { resolvers } = require("./schema/resolvers");
const {db} = require('./database/connection')

const server = new ApolloServer({ typeDefs, resolvers });

// Database 

db.connect((err)=>{
  if(err) console.log(err);
  else console.log('DB Connected');
})

server.listen().then(() => {
  console.log("API RUNNING");
});
