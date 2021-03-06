import axios from 'axios'

export default function(url='',data={},params={},headers={},method='get'){
    console.log(localStorage.token)
    let token=localStorage.token,baseURL=''
    if(token==undefined||token==''){
        // baseURL='http://easy-mock.com/mock/5988219ea1d30433d857e30a/yunke'
        baseURL='http://192.168.2.200:8080'
    }else{
        // baseURL='http://easy-mock.com/mock/5988219ea1d30433d857e30a/yunke'
        baseURL='http://192.168.2.200:8080'
        data.user_token=token;
    }
    
    return axios({
        url:url,
        baseURL:baseURL,
        responseType:'json',
        data:data,
        params:params,
        headers: headers,
        method:method,  
        withCredentials:false
    })
}