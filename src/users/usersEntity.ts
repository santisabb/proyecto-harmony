import crypto, { randomUUID } from 'crypto'

export class User{
    constructor(
        public userName: string,
        public email: string,
        public webLink: string,
        public totalRecords: number,
        public favoriteRecords: string[],
        public userId= crypto.randomUUID()
    ) {}
}