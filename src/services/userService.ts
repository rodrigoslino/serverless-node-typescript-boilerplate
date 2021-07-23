import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import {ObjectId} from 'mongodb'
import 'source-map-support/register'
import {connectToDatabase} from '../middleware/connectToDatabase'
import {verifyPassword} from '../middleware/passwordVerification'

import settings from '../config/projectSettings'

export async function getToken({email, password}) {
  const db = await connectToDatabase()
  const collection = db.collection('users')

  const user = await collection.findOne({email})

  if (!user) throw new Error('Invalid email or password.')

  const validPassword = await bcrypt.compare(password, user.password)

  if (!validPassword) throw new Error('Invalid email or password.')

  const {password: passwordUSer, ...userData} = user
  const token = jwt.sign(userData, process.env.ENV_JWT_PRIVATE_KEY, {
    expiresIn: settings.jwtExpirationTime,
  })
  return token
}

export async function getMe(_id: string) {
  const db = await connectToDatabase()
  const collection = db.collection('users')

  const data = await collection.findOne({_id: new ObjectId(_id)})
  const {password, ...resultData} = data

  return resultData
}

export async function add({name, email, password}) {
  const db = await connectToDatabase()
  const collection = db.collection('users')

  let findUser = await collection.findOne({email})
  if (findUser) throw new Error('User already registered.')

  let validPassword = await verifyPassword(password)
  if (!validPassword.isValid) throw new Error(validPassword.errorMessage)

  let newUser = {
    _id: null,
    name,
    email,
    password,
  }

  const salt = await bcrypt.genSalt(10)
  newUser.password = await bcrypt.hash(newUser.password, salt)
  const data = await collection.insertOne(newUser)

  newUser = data.ops[0]

  const {password: passworUser, ...resultNewUser} = newUser

  const token = jwt.sign(resultNewUser, process.env.ENV_JWT_PRIVATE_KEY)
  return {token, resultNewUser}
}
