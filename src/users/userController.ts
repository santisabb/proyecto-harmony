import { NextFunction, Request, Response } from "express"
import { UserRepository } from "./usersRepository.js"
import { User } from "./usersEntity.js"

const userRepo = new UserRepository()

function sanitizeUserInput (req: Request, res: Response, next: NextFunction){
    req.body.sanitizeInput = {
        userName: req.body.userName,
        email: req.body.email,
        webLink: req.body.webLink,
        totalRecords: req.body.totalRecords,
        favoriteRecords: req.body.favoriteRecords
    }

    Object.keys(req.body.sanitizeInput).forEach((key) => {
        if (req.body.sanitizeInput[key] === undefined){
            delete req.body.sanitizeInput[key]
        }
    })

    next()
}

function findAll(req: Request, res: Response){
    res.json({ data:  userRepo.findAll()})
}

function findOne(req: Request, res: Response){
    const id =  req.params.userId
    const user = userRepo.findOne({ id })

    if (!user) {
        res.status(404).send({ message: 'User not found bro :('})
    }

    res.json({ data:user })
}

function add(req: Request, res: Response){
    const input = req.body.sanitizeInput
    const userInput = new User(input.userName, input.email, input.webLink, input.totalRecords, input.favoriteRecords)

    const user = userRepo.add(userInput)
    return res.status(201).send({ message: 'User added successfully', data: user })
}

function update(req: Request, res: Response){
    req.body.sanitizeInput.userId = req.params.userId
    const user = userRepo.update(req.body.sanitizeInput)   

    if (!user) {
        res.status(404).send({ message: 'User not found bro :('})
    }

    res.status(200).send({ message: 'User successfully modified' })
}

function remove(req: Request, res: Response){
    const id =  req.params.userId
    
    const user = userRepo.delete({ id })

    if (!user) {
        res.status(404).send({ message: 'User not found bro :('})
    }else{
        res.status(200).send({ message: 'User successfully deleted' })
    }
}

export { findAll, sanitizeUserInput, findOne, add, update, remove}