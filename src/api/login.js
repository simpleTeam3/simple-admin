import request from '~/utils/request';

export function login(data){
    return request({
        url: '/user/loginFail',
        method: 'post',
        data: data
    })
}