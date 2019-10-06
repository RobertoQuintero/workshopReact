import axios from "axios"
import { 
  GET_ALL_POSTS,
  GET_ALL_SPECIALITIES, 
  GET_ALL_COURSES, GET_ALL_TEACHERS, 
  GET_POST, 
  GET_SPECIALITY, 
  GET_COURSE, 
  GET_FRAGMENT 
} from "./actions"

const API_URL = process.env.REACT_APP_API_URL //de esta manera se accede alas variables de entorno

export const getAllPosts = () =>dispatch =>{
  axios.get(`${API_URL}/posts`)
    .then(response =>{
      return dispatch({
        type: GET_ALL_POSTS,
        posts: response.data
      })
    })
}

export const getAllSpecialities = () =>dispatch =>{
  axios.get(`${API_URL}/especialidades`)
    .then(response =>{
      return dispatch({
        type: GET_ALL_SPECIALITIES,
        specialities: response.data
      })
    })
}

export const getAllCourses = () =>dispatch =>{
  axios.get(`${API_URL}/cursos`)
    .then(response =>{
      return dispatch({
        type: GET_ALL_COURSES,
        courses: response.data
      })
    })
}

export const getAllTeachers = () =>dispatch =>{
  axios.get(`${API_URL}/profesores`)
    .then(response =>{
      return dispatch({
        type: GET_ALL_TEACHERS,
        teachers: response.data
      })
    })
}

export const getPost = id =>dispatch =>{
  axios.get(`${API_URL}/posts/${id}`)
    .then(response =>{
      return dispatch({
        type: GET_POST,
        post: response.data
      })
    })
}

export const getSpeciality = id =>dispatch =>{
  axios.get(`${API_URL}/especialidad/${id}`)
    .then(response =>{
      return dispatch({
        type: GET_SPECIALITY,
        speciality: response.data
      })
    })
}

export const getCourse = id =>dispatch =>{
  axios.get(`${API_URL}/curso/${id}`)
    .then(response =>{
      return dispatch({
        type: GET_COURSE,
        course: response.data
      })
    })
}

export const getFragment = id =>dispatch =>{
  axios.get(`${API_URL}/clase/${id}`)
    .then(response =>{
      return dispatch({
        type: GET_FRAGMENT,
        fragment: response.data
      })
    })
}



