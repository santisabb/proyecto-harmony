import { Repository } from "../shared/repository.js"
import { User } from "./usersEntity.js"
import { db } from "../shared/db/dbConnection.js"
import { ObjectId } from "mongodb"

const usersArray = [
    new User(
        'santisabb',
        'santisabbioni@gmail.com',
        'www.soysabbioni.com',
        10,
        ['Temor', 'Leyendas de la Noche', 'SIN PRONTUARIO'],
        '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
    )
]

const users = db.collection<User>('users')

export class UserRepository implements Repository<User>{
    public async findAll(): Promise<User[] | undefined> {
        return await users.find().toArray()
    }

    public async findOne(i: { id: string; }): Promise<User | undefined> {
        const _id = new ObjectId(i.id)
        return (await users.findOne({ _id })) || undefined
    }

    public async add(i: User): Promise<User | undefined> {
        await users.insertOne(i)
        return i
    }

    public async update(id: string, i: User): Promise<User | undefined> {
        const _id = new ObjectId(id)
        return (await users.findOneAndUpdate({ _id }, { $set: i }, { returnDocument: 'after' })) || undefined
    }

    public async delete(i: { id: string; }): Promise<User | undefined> {
        const _id = new ObjectId(i.id)
        return (await users.findOneAndDelete({ _id })) || undefined
    }
}