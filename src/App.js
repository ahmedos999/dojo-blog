
import Navbar from './nav';
import Home from './home';
import Create from './Create';
import BlogDetails from './blogDetails';
import NotFound from './NotFound'



import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          {/* just like swicth to show on page  */}
          <Switch> 
            <Route exact path="/">
              <Home></Home>
            </Route>\

            <Route exact path="/create">
              <Create></Create>
            </Route>

            <Route exact path="/blogs/:id">
              <BlogDetails></BlogDetails>
            </Route>

            <Route>
              <NotFound></NotFound>
            </Route>


          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
