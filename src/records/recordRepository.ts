import { Repository } from "../shared/repository.js"
import { Record } from "./recordsEntity.js"
import { db } from "../shared/db/dbConnection.js"
import { ObjectId } from "mongodb"

const recordsArray = [
    new Record(
        'Temor',
        26.45,
        ['Abismo', 'Una Opcion', 'Silencio', 'Temor', 'Yendo Hacia Ti', 'Encontrándote', 'Dame Rock', 'A Tu Manera', 'Lo Que Soy'],
        ['C.R.O'],
        5,
        'c2181edf-041b-0a61-3651-79d671fa3db7',
    ),
]

const records = db.collection<Record>('records')

export class RecodRepository implements Repository<Record> {
    public async findAll(): Promise<Record[] | undefined> {
        return await records.find().toArray()
    }

    public async findOne(i: { id: string; }): Promise<Record | undefined> {
        const _id = new ObjectId(i.id)
        return (await records.findOne({ _id })) || undefined
    }

    public async add(i: Record): Promise<Record | undefined> {
        await records.insertOne(i)
        return i
    }

    public async update(id: string,i: Record): Promise<Record | undefined> {
        const _id = new ObjectId(id)
        return (await records.findOneAndUpdate({ _id }, { $set: i }, { returnDocument: 'after' })) || undefined
    }

    public async delete(i: { id: string; }): Promise<Record | undefined> {
        const _id = new ObjectId(i.id)
        return (await records.findOneAndDelete({ _id })) || undefined
    }
}