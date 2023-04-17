//api设置
import request from './axios'

const verify = {
	getPublicKey(){
		return request.get("/ibs/verify/key")
	},
	login(account,pass){
		return request.post("/ibs/verify/login",{'account': account,'password': pass})
	}
}

const containers = {
	start(id){
		return request.post("/ibs/api/containers/"+id+'/start')
	},
	stop(id){
		return request.post("/ibs/api/containers/"+id+'/stop')
	},
	pause(id){
		return request.post("/ibs/api/containers/"+id+'/pause')
	},
	restart(id){
		return request.post("/ibs/api/containers/"+id+'/restart')
	},
	delete(id){
		return request.post("/ibs/api/containers/"+id+'/delete')
	},
	create(env,ports,image,name){
		return request.post("/ibs/api/containers/create",{
			'name': name,
			'imageName': image,
			'ports': ports
		})
	},
	getContainers(all,filter){
		return request.get("/ibs/api/containers",{
			'all': all,
			'filter': filter
		})
	}
}

const images = {
	getImage(){
		return request.get("/ibs/api/images")
	},
	pullImage(name,tag){
		return request.post('/ibs/api/images/pull',{
			'name': name,
			'tag': tag
		})
	}
}

const api ={
	verify,
	containers
}
export default api
