// 定义数据类型
export interface Loginform {
    username: string,
    password: string
}

export interface typedata {
    token: string
}

export interface reqUserLogin {
    code: string,
    data: typedata
}

export interface reqUserfrom {
    userId: number,
    avatar:string,
    username:string,
    password: string,
    desc: string,
    roles: string[],
    buttons: string[],
    routes:string[],
    token: string
}

export interface user {
    Checkuser: reqUserfrom
}


export interface reUserinfo {
    code: string,
    data: user
}