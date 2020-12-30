import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Layout from './Layout';
import Home from '../pages/Home';
import PlaceList from '../pages/PlaceList';
import PlaceSelected from '../pages/PlaceSelected';


const App = () => {

    return(
        <BrowserRouter>
            <Layout>
               <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/place-list' component={PlaceList} />
                    <Route path='/SelectedPlace' component={PlaceSelected} />
                    {/* <Route exact path='/Details' component={} /> */}
               </Switch>
            </Layout>
        </BrowserRouter>
    )

}

export default App;