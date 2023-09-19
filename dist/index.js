import express from 'express';
const app = express();
app.use('/', (req, res) => {
    res.json({ message: '<h1>buuueenasss como vamos</h1>' });
});
app.listen(8080, () => {
    console.log('listening on port 8080');
});
//# sourceMappingURL=index.js.map