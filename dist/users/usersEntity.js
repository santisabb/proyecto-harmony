import crypto from 'crypto';
import { ObjectId } from 'mongodb';
export class User {
    constructor(userName, email, webLink, totalRecords, favoriteRecords, userId = crypto.randomUUID(), user_id = ObjectId) {
        this.userName = userName;
        this.email = email;
        this.webLink = webLink;
        this.totalRecords = totalRecords;
        this.favoriteRecords = favoriteRecords;
        this.userId = userId;
        this.user_id = user_id;
    }
}
//# sourceMappingURL=usersEntity.js.map