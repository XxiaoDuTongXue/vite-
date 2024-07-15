// 



function createUserList() {
    return [
        {
            userId: 1,
            avatar:
                'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
            username: 'admin',
            password: '123456',
            desc: '平台管理员',
            roles: ['平台管理员'],
            buttons: ['cuser.detail'],
            routes: ['home'],
            token: 'Admin Token',
        },
        {
            userId: 2,
            avatar:
                'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
            username: 'system',
            password: '123456',
            desc: '系统管理员',
            roles: ['系统管理员'],
            buttons: ['cuser.detail', 'cuser.user'],
            routes: ['home'],
            token: 'System Token',
        },
    ]
}


// 用户登录接口
export default [
    {  //请求地址
        url: '/api/user/login',
        //请求方式
        method: 'post',
        //获取请求体携带过来的用户名与密码
        response: ({ body }) => {

            const { username, password } = body
            const Checkuser = createUserList().find((item) => {
                return item.username == username && item.password == password;
            })

            if (!Checkuser) {
                return {
                    code: 201,
                    data: { message: '登录失败！' }
                }
            }
            const { token } = Checkuser
            return {
                code: 200,
                data: { token }
            }

        }
    },
    {
        //获取用户信息
        url: '/api/user/info',
        // 请求方式
        method: 'get',

        response: (data) => {
            console.log(data);
            // const { token } = request
            // const token = request.headers.token
            // const Checkuser = createUserList().find((item) => {
            //     return item.token == token
            // })
            // if (!Checkuser) {
            //     return {
            //         code: 201,
            //         data: { message: '获取失败！' }
            //     }
            // }
            // return {
            //     code: 200,
            //     data: { Checkuser }
            // }


        }
    }
]









