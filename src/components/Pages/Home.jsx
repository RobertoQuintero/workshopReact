import React,{useEffect} from 'react'
import Banner from '../Organisms/Banner'
import {connect} from 'react-redux'
import { getAllPosts } from '../../redux/actionCreators'
import Publication from '../Organisms/Publication'
import store from '../../redux/store'

const Home = ({posts}) => {
  
  useEffect(()=>{
    store.dispatch(getAllPosts())
  },[])
  return(
 
    <>
      <Banner 
        color='dark-color'
        title='Bienvenidos a la experiencia más increíble de educación online. Cmienza hoy mismo a aprender'
        subtitle='Con la programación reactiva tu aplicación será capaz de observar flujos de datos y reaccionar en cada cambio. Durante el curso aprenderás este paradigma de programación con JavaScript, utilizando la librería RxJS. Comenzamos el lunes 7 de octubre.'
        image='https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2017-11/banner-equipo.jpg'
        home
        poster="https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-10/RxJs.png"
      />
      <main className="ed-grid m-grid-3">
        <div className='l-section m-cols-2'>
          <h2>Últimas publicaciones</h2>
          {
            posts 
              ? posts.map(p=><Publication  title={p.title} author={p.author} fecha={p.fecha} content={p.content} key={p.id}/>)
              : <p>No existen publicaciones en la base de datos</p>
          }
            
        </div>
        <div>
          <h3>Lista de categorías</h3>
          <ul className="feature-list">
            <li><span>React native</span></li>
            <li><span>Angular</span></li>
            <li><span>Vue.js</span></li>
            <li><span>HTML</span></li>
            <li><span>CSS</span></li>
          </ul>
        </div>
      </main>
    </>
  )}

  const mapStateToProps = state => ({
    posts: state.postReducer.posts
  })

export default connect(mapStateToProps,{})(Home)
