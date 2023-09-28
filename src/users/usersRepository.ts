import { Repository } from "../shared/repository.js"
import { User } from "./usersEntity.js"

const users = [
    new User(
        'santisabb',
        'santisabbioni@gmail.com',
        'www.soysabbioni.com',
        10,
        ['Temor', 'Leyendas de la Noche', 'SIN PRONTUARIO'],
        '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
    )
]

export class UserRepository implements Repository<User>{
    public findAll(): User[] | undefined {
        return users
    }

    public findOne(i: { id: string; }): User | undefined {
        return users.find((user) => user.userId === i.id)
    }

    public add(i: User): User | undefined {
        users.push(i)
        return i
    }

    public update(i: User): User | undefined {
        const userIndex = users.findIndex((user) => user.userId === i.userId) 

        if (userIndex!== -1) {
            users[userIndex] = { ...users[userIndex], ...i }
        }

        return users[userIndex]
    }

    public delete(i: { id: string; }): User | undefined {
        const userIndex = users.findIndex((user) => user.userId === i.id)

        if (userIndex!== -1) {
            const userDelete = users.splice(userIndex, 1)
            return userDelete[0]
        }
    }
}