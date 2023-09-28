import crypto from 'crypto'

export class Record{
    constructor(
        public recordName: string,
        public duration: number,
        public songs: string[],
        public artistName: string[],
        public rateAverage: number,
        public recordId= crypto.randomUUID()
    ) {}
}