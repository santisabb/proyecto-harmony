import crypto from 'crypto'
import { ObjectId } from 'mongodb';

export class Record{
    constructor(
        public recordName: string,
        public duration: number,
        public songs: string[],
        public artistName: string[],
        public rateAverage: number,
        public recordId= crypto.randomUUID(),
        public record_id = ObjectId
    ) {}
}