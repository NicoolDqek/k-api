import axios from 'axios'


const UrlBase =axios.create({
 baseURL:'https://k-api-5iy3.onrender.com/',
//baseURL:'http://localhost:3000',
headers:{
 'Content-Type': 'application/json',
}
})

export default UrlBase 