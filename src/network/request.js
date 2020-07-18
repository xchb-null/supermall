import axios from 'axios';



export function request(config){
	
	const local = axios.create({
		baseURL:'http://123.207.32.32:8000',
		timeout:3000
	});
		
	// 2.2.响应拦截
	local.interceptors.response.use(res => {
	  return res.data;
	}, err => {
	  console.log(err);
	})
	
	return local(config);
}