'use strict'
const dotenv = require('dotenv')
const assert = require('assert')

dotenv.config()

const {
    PORT,
    HOST,
    DATABASE_URL,
} = process.env

const serviceAccount = process.env.FIREBASE_PRIVATE_KEY;

assert(PORT, 'PORT is required')
assert(HOST, 'HOST is required')

module.exports = {
    port: PORT,
    host: HOST,
    database: DATABASE_URL,
    serviceAccount
}