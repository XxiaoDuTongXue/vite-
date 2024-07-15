// 统一管理用户项目相关接口
import request from "@/utils/request";
import type { Loginform,reqUserLogin,reUserinfo} from "./type";

enum Api{
    LOGIN_USER = '/user/login',
    INFO_USER = '/user/info'
}


// 登录接口
export const reqLogin=(data:Loginform)=>request.post<any,reqUserLogin>(Api.LOGIN_USER)
// 用户获取
export const reqinfo=()=>request.get<reUserinfo>(Api.INFO_USER)


