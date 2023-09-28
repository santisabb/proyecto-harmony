import crypto from 'crypto';
export class Record {
    constructor(recordName, duration, songs, artistName, rateAverage, recordId = crypto.randomUUID()) {
        this.recordName = recordName;
        this.duration = duration;
        this.songs = songs;
        this.artistName = artistName;
        this.rateAverage = rateAverage;
        this.recordId = recordId;
    }
}
//# sourceMappingURL=recordsEntity.js.map