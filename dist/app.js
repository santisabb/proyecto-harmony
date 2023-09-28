import express from 'express';
import { User } from './users/usersEntity.js';
import { Record } from './records/recordsEntity.js';
import { RecodRepository } from './records/recordRepository.js';
import { UserRepository } from './users/usersRepository.js';
const app = express();
const recRepo = new RecodRepository();
const userRepo = new UserRepository();
app.use(express.json());
const users = [
    new User('santisabb', 'santisabbioni@gmail.com', 'www.soysabbioni.com', 10, ['Temor', 'Leyendas de la Noche', 'SIN PRONTUARIO'], '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed')
];
const records = [
    new Record('Temor', 26.45, ['Abismo', 'Una Opcion', 'Silencio', 'Temor', 'Yendo Hacia Ti', 'Encontrándote', 'Dame Rock', 'A Tu Manera', 'Lo Que Soy'], ['C.R.O'], 5, 'c2181edf-041b-0a61-3651-79d671fa3db7')
];
<<<<<<< HEAD
=======
function sanitizeUserInput(req, res, next) {
    req.body.sanitizeInput = {
        userName: req.body.userName,
        email: req.body.email,
        webLink: req.body.webLink,
        totalRecords: req.body.totalRecords,
        favoriteRecords: req.body.favoriteRecords
    };
    Object.keys(req.body.sanitizeInput).forEach((key) => {
        if (req.body.sanitizeInput[key] === undefined) {
            delete req.body.sanitizeInput[key];
        }
    });
    next();
}
function sanitizeRecordInput(req, res, next) {
    req.body.sanitizeInput = {
        recordName: req.body.recordName,
        duration: req.body.duration,
        songs: req.body.songs,
        artistName: req.body.artistName,
        rateAverage: req.body.rateAverage
    };
    Object.keys(req.body.sanitizeInput).forEach((key) => {
        if (req.body.sanitizeInput[key] === undefined) {
            delete req.body.sanitizeInput[key];
        }
    });
    next();
}
>>>>>>> layers
app.get('/api/users', (req, res) => {
    res.json({ data: userRepo.findAll() });
});
app.get('/api/users/:userId', (req, res) => {
    const id = req.params.userId;
    const user = userRepo.findOne({ id });
    if (!user) {
        res.status(404).send({ message: 'User not found bro :(' });
    }
    res.json({ data: user });
});
<<<<<<< HEAD
app.post('/api/users', (req, res) => {
    const { userName, email, webLink, totalRecords, favoriteRecords } = req.body;
    const user = new User(userName, email, webLink, totalRecords, favoriteRecords);
    users.push(user);
    res.status(201).send({ message: 'User added successfully', data: user });
});
app.put('/api/users/:userId', (req, res) => {
    const userIndex = users.findIndex((user) => user.userId === req.params.userId);
    if (userIndex === -1) {
        res.status(404).send({ message: 'User not found bro :(' });
    }
    const input = {
        userName: req.body.userName,
        email: req.body.email,
        webLink: req.body.webLink,
        totalRecords: req.body.totalRecords,
        favoriteRecords: req.body.favoriteRecords
    };
    users[userIndex] = { ...users[userIndex], ...input };
    res.status(200).send({ message: 'User successfully modified' });
});
app.delete('/api/users/:userId', (req, res) => {
    const userIndex = users.findIndex((user) => user.userId === req.params.userId);
    if (userIndex === -1) {
=======
app.post('/api/users', sanitizeUserInput, (req, res) => {
    const input = req.body.sanitizeInput;
    const userInput = new User(input.userName, input.email, input.webLink, input.totalRecords, input.favoriteRecords);
    const user = userRepo.add(userInput);
    res.status(201).send({ message: 'User added successfully', data: user });
});
app.patch('/api/users/:userId', sanitizeUserInput, (req, res) => {
    req.body.sanitizeInput.userId = req.params.userId;
    const user = userRepo.update(req.body.sanitizeInput);
    if (!user) {
        res.status(404).send({ message: 'User not found bro :(' });
    }
    res.status(200).send({ message: 'User successfully modified' });
});
app.delete('api/users/:userId', (req, res) => {
    const id = req.params.userId;
    const user = userRepo.delete({ id });
    if (!user) {
>>>>>>> layers
        res.status(404).send({ message: 'User not found bro :(' });
    }
    else {
        res.status(200).send({ message: 'User successfully deleted' });
    }
});
app.get('/api/records', (req, res) => {
    res.json({ data: recRepo.findAll() });
});
app.get('/api/records/:recordId', (req, res) => {
    const id = req.params.recordId;
    const record = recRepo.findOne({ id });
    if (!record) {
        res.status(404).send({ message: 'Record not found :(' });
    }
    res.json({ data: record });
});
<<<<<<< HEAD
app.post('/api/records', (req, res) => {
    const { recordName, duration, songs, artistName, rateAverage } = req.body;
    const record = new Record(recordName, duration, songs, artistName, rateAverage);
    records.push(record);
    res.status(201).send({ message: 'Record successfully created', data: record });
});
app.put('/api/records/:recordId', (req, res) => {
    const recordIndex = records.findIndex((record) => record.recordId === req.params.recordId);
    if (recordIndex === -1) {
        res.status(404).send({ message: 'Record not found bro :(' });
    }
    const input = {
        recordName: req.body.recordName,
        duration: req.body.duration,
        songs: req.body.songs,
        artistName: req.body.artistName,
        rateAverage: req.body.rateAverage
    };
    records[recordIndex] = { ...records[recordIndex], ...input };
    res.status(200).send({ message: 'User successfully modified' });
=======
app.post('/api/records', sanitizeRecordInput, (req, res) => {
    const input = req.body.sanitizeInput;
    const recordInput = new Record(input.recordName, input.duration, input.songs, input.artistName, input.rateAverage);
    const record = recRepo.add(recordInput);
    res.status(201).send({ message: 'Record successfully created', data: record });
});
app.put('/api/records/:recordId', sanitizeRecordInput, (req, res) => {
    req.body.sanitizeInput.recordId = req.params.recordId;
    const record = recRepo.update(req.body.sanitizeInput);
    if (!record) {
        res.status(404).send({ message: 'Record not found bro :(' });
    }
    res.status(200).send({ message: 'Record successfully modified', data: record });
});
app.patch('/api/records/:recordId', sanitizeRecordInput, (req, res) => {
    req.body.sanitizeInput.recordId = req.params.recordId;
    const record = recRepo.update(req.body.sanitizeInput);
    if (!record) {
        res.status(404).send({ message: 'Record not found bro :(' });
    }
    res.status(200).send({ message: 'Record successfully modified' });
>>>>>>> layers
});
app.delete('/api/records/:recordId', (req, res) => {
    const id = req.params.recordId;
    const record = recRepo.delete({ id });
    if (!record) {
        res.status(404).send({ message: 'Record not found' });
    }
    else {
        res.status(200).send({ message: 'Record successfully deleted' });
    }
});
app.use((_, res) => {
    res.status(404).send({ message: 'Resource not found' });
});
app.listen(8080, () => {
    console.log('listening on port 8080');
});
//# sourceMappingURL=app.js.map