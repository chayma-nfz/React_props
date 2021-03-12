
import './App.css';

import React,{PropTypes} from 'react';
import Profile from './profile/Profile.js';
import 'bootstrap/dist/css/bootstrap.css';

class App extends React.Component {
  
    render() {
     const styleObject ={ color :'black'  ,fontStyle: "italic" }
    return (
      <div className="App"  style={ styleObject}>
        <Profile username="Nefzi chayma" 
         emailAddress="Nefzi.chayma@gmail.com" 
         bio="The projects on which I worked as part of my experience helped me develop my analytical skills,
          prove my flexibility to different situations and acquire good communication skills.   " 
          profession="  Full Stack  javaScript Developer "
          src= "./image/images.png"
          Handelhender ={this.Handelname}
        />
         
      </div>
    );
  }
}
App.propTypes = {
};


export default App;
