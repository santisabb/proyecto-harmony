import { Repository } from "../shared/repository.js"
import { Record } from "./recordsEntity.js"

const records = [
    new Record(
        'Temor',
        26.45,
        ['Abismo', 'Una Opcion', 'Silencio', 'Temor', 'Yendo Hacia Ti', 'Encontrándote', 'Dame Rock', 'A Tu Manera', 'Lo Que Soy'],
        ['C.R.O'],
        5,
        'c2181edf-041b-0a61-3651-79d671fa3db7',
    ),
]

export class RecodRepository implements Repository<Record> {
    public findAll(): Record[] | undefined {
        return records
    }

    public findOne(i: { id: string; }): Record | undefined {
        return records.find((record) => record.recordId === i.id)
    }

    public add(i: Record): Record | undefined {
        records.push(i)
        return i
    }

    public update(i: Record): Record | undefined {
        const recordIndex = records.findIndex((record) => record.recordId === i.recordId)

        if (recordIndex !== -1){
            records[recordIndex] = { ...records[recordIndex], ...i }
        }

        return records[recordIndex]
    }

    public delete(i: { id: string; }): Record | undefined {
        const recordIndex = records.findIndex((record) => record.recordId === i.id)

        if (recordIndex!== -1){
            const deletedRecords = records.splice(recordIndex, 1)
            return deletedRecords[0]
        }
    }
}