import crypto from 'crypto';
import { ObjectId } from 'mongodb';
export class Record {
    constructor(recordName, duration, songs, artistName, rateAverage, recordId = crypto.randomUUID(), record_id = ObjectId) {
        this.recordName = recordName;
        this.duration = duration;
        this.songs = songs;
        this.artistName = artistName;
        this.rateAverage = rateAverage;
        this.recordId = recordId;
        this.record_id = record_id;
    }
}
//# sourceMappingURL=recordsEntity.js.map