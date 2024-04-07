import { Client, Databases, ID, Query, Storage } from "appwrite";
import config from "../conf/conf";

export class Service {
    client = new Client();
    database;
    bucket
    constructor() {
        this.client
            .setEndpoint(config.appwriteUrl) // Your API Endpoint
            .setProject(config.appwriteProjectId);

        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)
        
        //post related service(CRUD OPERATION)
    }
    async createpost({ title, content, featuredimage, status, user }) {
        try {
            return await this.database.createDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                ID.unique(),
                {
                    title,
                    content,
                    featuredimage,
                    status,
                    user
                }
            )}
        catch (error) {
            console.log(error);
        }

    }
    async updatePost({ title, content, featuredimage, status }) {
        try {
            return await this.database.updateDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                ID.unique(),
                {
                    title,
                    content,
                    featuredimage,
                    status,
                }
            )}
        catch (error) {
            console.log(error);
        }

    }
    async deletePost(id) {
        try {
             await this.database.deleteDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                id
            )
        return true;
        }
        catch (error) {
            console.log(error);
        }

    }
    async getPost(id) {
        try {
            return  await this.database.getDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                id
            )
        
        }
        catch (error) {
            console.log(error);
        }

    }
    async getPosts(queries = [Query.equal("status","active")]) {
        try {
            return  await this.database.listDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                queries
            )
        }
        catch (error) {
            console.log(error);
        }

    }
    //file upload services
    async createfile(file){
      try {
        return await this.bucket.createFile(
            config.appwriteBucketId,
            ID.unique(),
            file
        )
      } catch (error) {
        console.log(error);
      }
    }
    async deletefile(fileid){
        try {
          return await this.bucket.deleteFile(
              config.appwriteBucketId,
              fileid
          )
  
        } catch (error) {
          console.log(error);
        }
      }
    getFilePreview(fileid){
        try {
            this.bucket.getFilePreview(
              config.appwriteBucketId,
              fileid
          )
        } catch (error) {
          console.log(error);
        }
      }
}
const service = new service()
export default service;