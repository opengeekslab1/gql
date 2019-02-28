require('dotenv').config();
const koa = require('koa');
const koaRouter = require('koa-router');
const koaBody = require('koa-bodyparser');
const { graphqlKoa, graphiqlKoa } = require('graphql-server-koa');

const schema = require('./data/schema');
require('./db');

const app = new koa();
const router = new koaRouter();
const PORT = 3000;

app.use(koaBody());

router.get('/graphql', graphqlKoa({ schema }));
router.post('/graphql', graphqlKoa({ schema }));

// router for tests
router.get('/graphiql', graphiqlKoa({ endpointURL: 'graphql' }));

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(PORT, () => {
  console.log(`Server is running on localhost:${PORT}`);
  console.log(`GraphiQL dashboard localhost:${PORT}/graphiql`);
});
