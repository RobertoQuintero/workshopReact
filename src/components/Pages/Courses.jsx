import React,{useEffect} from 'react'
import Banner from '../Organisms/Banner'
import {connect} from 'react-redux'
import { getAllCourses } from '../../redux/actionCreators'
import store from '../../redux/store'
import Card from '../Organisms/Card'

const Courses = ({courses}) => {
  
  useEffect(()=> {
    store.dispatch(getAllCourses())
  },[])

  return (
  <>
    <Banner 
      color='dark-color'
      image ={{
        src:'https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2017-11/banner-equipo.jpg',
        alt:'Banner Cursos'
      }}
      title='Nuestros cursos'
      subtitle='Comienza desde cero hoy mismo en tu camino a dominar la tecnología'
    />
    {
      courses &&
      <main className="ed-grid m-grid-5">
        {
          courses.map(c=>(
            <Card key={c.id} name={c.name} picture={c.picture} path='cursos' cardId={c.id}/>
          ))
        }
      </main>
    }
  </>

  )}
const mapStateToProps = state => ({
  courses: state.courseReducer.courses
})

export default connect(mapStateToProps,{})(Courses)
