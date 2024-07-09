import { request } from '../request.ts'
export class UserService{
    static async getUserInfo(id:number){
        return await request('/user/info',{id},"POST")
    }
}
