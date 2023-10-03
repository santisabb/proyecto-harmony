import express from 'express';
import { recordRouter } from './records/recordRoutes.js';
import { userRouter } from './users/userRoutes.js';
const app = express();
app.use(express.json());
app.use('/api/users', userRouter);
app.use('/api/records', recordRouter);
app.use((_, res) => {
    res.status(404).send({ message: 'Resource not found' });
});
app.listen(8080, () => {
    console.log('listening on port 8080');
});
//# sourceMappingURL=app.js.map