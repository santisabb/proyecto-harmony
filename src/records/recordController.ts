import { NextFunction, Request, Response } from "express"
import { RecodRepository } from "./recordRepository.js"
import { Record } from "./recordsEntity.js"

const recRepo = new RecodRepository()

function sanitizeRecordInput (req: Request, res: Response, next: NextFunction){
    req.body.sanitizeInput = {
        recordName: req.body.recordName,
        duration: req.body.duration,
        songs: req.body.songs,
        artistName: req.body.artistName,
        rateAverage: req.body.rateAverage
    }

    Object.keys(req.body.sanitizeInput).forEach((key) => {
        if (req.body.sanitizeInput[key] === undefined){
            delete req.body.sanitizeInput[key]
        }
    })

    next()
}

async function findAll(req: Request, res: Response){
    res.json({ data: await recRepo.findAll() })
}

async function findOne(req: Request, res: Response){
    const id = req.params.recordId

    const record = await recRepo.findOne({ id})

    if(!record){
        res.status(404).send({ message: 'Record not found :('})
    }

    res.json({ data: record })
}

async function add(req: Request, res: Response){
    const input = req.body.sanitizeInput

    const recordInput = new Record(input.recordName, input.duration, input.songs, input.artistName, input.rateAverage)

    const record = await recRepo.add(recordInput)

    return res.status(201).send({ message: 'Record successfully created', data: record })
}

async function update(req: Request, res: Response){
    req.body.sanitizeInput.recordId = req.params.recordId
    const record = await recRepo.update(req.params.id, req.body.sanitizeInput)

    if (!record){
        res.status(404).send({ message: 'Record not found bro :('})
    }

    return res.status(200).send({ message: 'Record successfully modified'})
}

async function remove(req: Request, res: Response){
    const id = req.params.recordId
    const record = await recRepo.delete({id})

    if (!record) {
        res.status(404).send({ message: 'Record not found' })
    } else {
        res.status(200).send({ message: 'Record successfully deleted' })
    }
}

export { sanitizeRecordInput, findAll, findOne, add, update, remove}