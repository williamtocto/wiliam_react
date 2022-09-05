import axios from 'axios';
export class ProductService{
baseUrl = "https://springapimongo.herokuapp.com/api/"

//william tocto

create(producto){
    return axios.post(this.baseUrl+"producto/crear",producto).then(res => res.data);

}
readAll(){
    return axios.get(this.baseUrl+"producto/listar").then(res => res.data);

}
update(producto){
    return axios.put(this.baseUrl+"producto/actulizar"+producto._id,producto).then(res => res.data);

}
delete(id){
    return axios.post(this.baseUrl+"producto/borrar"+id).then(res => res.data);
}


}