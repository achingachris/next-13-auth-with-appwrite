import { Appwrite, Account } from 'appwrite'

const appwrite = new Appwrite()

appwrite
  .setEndpoint('http://localhost:5000/v1')
  .setProject('6383b3db500d7247998c')

const account = new Account(client)
account.create(ID.unique(), 'me@example.com', 'password', 'Jane Doe').then(
  (response) => {
    console.log(response)
  },
  (error) => {
    console.log(error)
  }
)
