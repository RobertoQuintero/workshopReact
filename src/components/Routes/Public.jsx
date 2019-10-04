import React from 'react'
import {Route,Redirect} from 'react-router-dom'

const Protected = ({component: Component,...rest}) => {
const userlogged = localStorage.getItem('token')

  if(userlogged) {
    return <Redirect to="/"/>
  }else{

    return <Route {...rest} render={Component} />
  }

}

export default Protected
