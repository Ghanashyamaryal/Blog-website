
import { Client, Account, ID } from "appwrite";
import config from "../conf/conf";

export class Authservice {
    client = new Client()
    account
    constructor() {
        this.client
            .setEndpoint(config.appwriteUrl) // Your API Endpoint
            .setProject(config.appwriteProjectId);

        this.account = new Account(this.client);
    }

    async createAccount({ email, password, name }) {
        try {

            const userAccount = await this.account.create(ID.unique(), email, password, name)

            if (userAccount) {
                return this.Login({ email, password })

            } else {
                return userAccount
            }

        } catch (error) {
            throw error;

        }

    }

    async Login({ email, password }) {
        try {
            return await this.account.createEmailSession(email, password)

        } catch (error) {
            console.log(error)
        }
    }

    async  userGet(){
        try {
            return await this.account.get();
        } catch (error) {
            console.log(error)
        }
    }
    async logout (){
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            console.log(error)
        }
    }
}

const authservice = new Authservice()
export default authservice;