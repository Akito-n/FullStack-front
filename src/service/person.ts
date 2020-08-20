import axios from 'axios'

const baseUrl = 'http://localhost:3008/persons'

interface PersonProps {
  name: string,
      number: string,
      id: number
}

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(res => res.data)
}


const create = (personObject: PersonProps) => {
  const request = axios.post(baseUrl, personObject)
  return request.then(res => res.data)
}


const update = (id: number, personObject: PersonProps) => {
  const request = axios.post(`${baseUrl}/${id}`, personObject)
  return request.then(res => res.data)
}

const destroy = (id: number) => {
  const request = axios.delete(`${baseUrl}/${id}`)
  return request.then(res => res.data)
}


export default {getAll, create, update, destroy}
