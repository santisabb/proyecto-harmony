import { Record } from "./recordsEntity.js";
import { db } from "../shared/db/dbConnection.js";
import { ObjectId } from "mongodb";
const recordsArray = [
    new Record('Temor', 26.45, ['Abismo', 'Una Opcion', 'Silencio', 'Temor', 'Yendo Hacia Ti', 'Encontrándote', 'Dame Rock', 'A Tu Manera', 'Lo Que Soy'], ['C.R.O'], 5, 'c2181edf-041b-0a61-3651-79d671fa3db7'),
];
const records = db.collection('records');
export class RecodRepository {
    async findAll() {
        return await records.find().toArray();
    }
    async findOne(i) {
        const _id = new ObjectId(i.id);
        return (await records.findOne({ _id })) || undefined;
    }
    async add(i) {
        await records.insertOne(i);
        return i;
    }
    async update(id, i) {
        const _id = new ObjectId(id);
        return (await records.findOneAndUpdate({ _id }, { $set: i }, { returnDocument: 'after' })) || undefined;
    }
    async delete(i) {
        const _id = new ObjectId(i.id);
        return (await records.findOneAndDelete({ _id })) || undefined;
    }
}
//# sourceMappingURL=recordRepository.js.map