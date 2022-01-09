import { createConnection } from 'typeorm'

createConnection().then(res => console.log("Database is ONLINE...")).then().catch(err => console.log);