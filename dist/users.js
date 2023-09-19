import crypto from 'crypto';
export class User {
    constructor(userName, email, webLink, totalRecords, favoriteRecords, userId = crypto.randomUUID()) {
        this.userName = userName;
        this.email = email;
        this.webLink = webLink;
        this.totalRecords = totalRecords;
        this.favoriteRecords = favoriteRecords;
        this.userId = userId;
    }
}
//# sourceMappingURL=users.js.map