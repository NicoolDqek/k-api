import axios from 'axios'


const UrlBase =axios.create({
baseURL:'https://k-api-phi.vercel.app',
headers:{
 'Content-Type': 'application/json',
}
})

export default UrlBase