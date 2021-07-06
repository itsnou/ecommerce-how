import {Route} from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Catalogo from './components/Catalogo/Catalogo';

function App() {
  return (
    <>
      <Route path={["/", "/vino/:id", "/catalogo"]}>
        <Nav/>
      </Route>
      <Route exact path='/catalogo' component={Catalogo}/>
    </>
  );
}

export default App;
