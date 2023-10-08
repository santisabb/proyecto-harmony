import { User } from "./usersEntity.js";
import { db } from "../shared/db/dbConnection.js";
import { ObjectId } from "mongodb";
const usersArray = [
    new User('santisabb', 'santisabbioni@gmail.com', 'www.soysabbioni.com', 10, ['Temor', 'Leyendas de la Noche', 'SIN PRONTUARIO'], '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed')
];
const users = db.collection('users');
export class UserRepository {
    async findAll() {
        return await users.find().toArray();
    }
    async findOne(i) {
        const _id = new ObjectId(i.id);
        return (await users.findOne({ _id })) || undefined;
    }
    async add(i) {
        await users.insertOne(i);
        return i;
    }
    async update(id, i) {
        const _id = new ObjectId(id);
        return (await users.findOneAndUpdate({ _id }, { $set: i }, { returnDocument: 'after' })) || undefined;
    }
    async delete(i) {
        const _id = new ObjectId(i.id);
        return (await users.findOneAndDelete({ _id })) || undefined;
    }
}
//# sourceMappingURL=usersRepository.js.map