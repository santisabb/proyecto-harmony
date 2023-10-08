import crypto, { randomUUID } from 'crypto'
import { ObjectId } from 'mongodb';

export class User{
    constructor(
        public userName: string,
        public email: string,
        public webLink: string,
        public totalRecords: number,
        public favoriteRecords: string[],
        public userId= crypto.randomUUID(),
        public user_id = ObjectId
    ) {}
}