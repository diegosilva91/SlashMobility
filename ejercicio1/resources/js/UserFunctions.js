import axios from 'axios';

export const login=user=>{
    return axios.
    post('api/login',
        {
            username:user.username,
            password:user.password
        },
        {
            headers:{'Content-Type':'aplication/json'}
        }
    )   
    .then(response=>{
        localStorage.setItem('userToken',response.data.token);
        console.log(response);
    })
    .catch(error=>{
        console.log(error);
    });
}
export const getUser=()=>{
    return axios.
    get('api/register',
        {
            headers:{Authorization:`Bearer ${localStorage.usertoken}`}
        }
    )
    .then(response=>{
        console.log(response);
        return response.data;
    })
    .catch(error=>{
        console.log(error);
    });
}