const server = require('./server');
const apiRoutes = require('./api/apiRoutes');
const PORT = process.env.PORT || 5000;


server.use('/api', apiRoutes);

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})