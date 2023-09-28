import { User } from "./usersEntity.js";
const users = [
    new User('santisabb', 'santisabbioni@gmail.com', 'www.soysabbioni.com', 10, ['Temor', 'Leyendas de la Noche', 'SIN PRONTUARIO'], '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed')
];
export class UserRepository {
    findAll() {
        return users;
    }
    findOne(i) {
        return users.find((user) => user.userId === i.id);
    }
    add(i) {
        users.push(i);
        return i;
    }
    update(i) {
        const userIndex = users.findIndex((user) => user.userId === i.userId);
        if (userIndex !== -1) {
            users[userIndex] = { ...users[userIndex], ...i };
        }
        return users[userIndex];
    }
    delete(i) {
        const userIndex = users.findIndex((user) => user.userId === i.id);
        if (userIndex !== -1) {
            const userDelete = users.splice(userIndex, 1);
            return userDelete[0];
        }
    }
}
//# sourceMappingURL=usersRepository.js.map