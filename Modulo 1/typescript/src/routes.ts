import { Request, Response } from 'express'

const helloGoStack = (request: Request, response:Response) => response.json({ message: 'Hello GoStack!' })

export { helloGoStack }