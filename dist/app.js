import express from 'express';
import { User } from './users.js';
import { Record } from './records.js';
const app = express();
app.use(express.json());
const users = [
    new User('santisabb', 'santisabbioni@gmail.com', 'www.soysabbioni.com', 10, ['Temor', 'Leyendas de la Noche', 'SIN PRONTUARIO'], '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed')
];
const records = [
    new Record('Temor', 26.45, ['Abismo', 'Una Opcion', 'Silencio', 'Temor', 'Yendo Hacia Ti', 'Encontrándote', 'Dame Rock', 'A Tu Manera', 'Lo Que Soy'], ['C.R.O'], 5, 'c2181edf-041b-0a61-3651-79d671fa3db7')
];
app.get('/api/users', (req, res) => {
    res.json({ users });
});
app.get('/api/users/:userId', (req, res) => {
    const user = users.find((user) => user.userId === req.params.userId);
    if (!user) {
        res.status(404).send({ message: 'User not found bro :(' });
    }
    res.json({ user });
});
app.post('/api/users', (req, res) => {
    const { userName, email, webLink, totalRecords, favoriteRecords } = req.body;
    const user = new User(userName, email, webLink, totalRecords, favoriteRecords);
    users.push(user);
    res.status(201).send({ message: 'User added successfully', data: user });
});
app.get('/api/records', (req, res) => {
    res.json(records);
});
app.get('/api/records/:recordId', (req, res) => {
    const record = records.find((record) => record.recordId === req.params.recordId);
    if (!record) {
        res.status(404).send({ message: 'Record not found :(' });
    }
    res.json(record);
});
app.post('/api/records', (req, res) => {
    const { recordName, duration, songs, artistName, rateAverage } = req.body;
    const record = new Record(recordName, duration, songs, artistName, rateAverage);
    records.push(record);
    res.status(201).send({ message: 'Record successfully created', data: record });
});
app.listen(8080, () => {
    console.log('listening on port 8080');
});
//# sourceMappingURL=app.js.map