
import { Account, ID } from "appwrite"
import appwriteClient from "./appwriteClient"

const accountClient = new Account(appwriteClient)

export const createAccount = async ({ email, password, name }) =>
  accountClient.create(ID.unique(), email, password, name)

export const createUserSession = async ({ email, password }) =>
  accountClient.createEmailSession(email, password)

export const getAccount = () => accountClient.get()

export const logout = () => accountClient.deleteSession("current")

export const getJWT = () => accountClient.createJWT()

