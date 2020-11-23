// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })

// Declare a route
fastify.get('/', async (request, reply) => {
  return { hello: 'world' }
})
fastify.get('/g', async (request, reply) => {
    reply.redirect('https://www.google.com')
  })
// Run the server!
const start = async () => {
  try {
    await fastify.listen(80)
    //Port has been set to 80 bcz its a default port and you can hide port number you can vist localhost/g as mentioned
    fastify.log.info(`server listening on ${fastify.server.address().port}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()