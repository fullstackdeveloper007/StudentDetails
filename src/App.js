import {Fragment} from 'react';
import Header from './components/Header';


import DashBoard  from './components/Dashboard'

function App() {
  return (
    <Fragment>      
      <Header/>
      <DashBoard/>
    {/* <Auth/>
    <Counter /> */}
    </Fragment>
  );
}

export default App;
