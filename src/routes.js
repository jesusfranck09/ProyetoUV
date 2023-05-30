import React, { Component } from 'react';
import {BrowserRouter as Router , Switch ,Route} from 'react-router-dom'
import Calculo from './component/excel/calculoComercial'
import './App.css'
class Routes extends Component { 
    
render(){
    return(

       <Router>
        <Switch>
            <main>
                <Route exact path = "/" component={Calculo}/>
            </main>     
        </Switch>   

       </Router> 


    )
}

}

export default Routes