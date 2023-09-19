import crypto from 'crypto';
export class User {
    constructor(userId = crypto.randomUUID(), userName, email, webLink, totalRecords, favoriteRecords) {
        this.userId = userId;
        this.userName = userName;
        this.email = email;
        this.webLink = webLink;
        this.totalRecords = totalRecords;
        this.favoriteRecords = favoriteRecords;
    }
}
//# sourceMappingURL=user.js.map