import React, { useState } from 'react';
import './App.css';
import Post from './Post';

function App() {
  const [posts, setPosts] = useState([]);

  return (
    <div className="app">
      <div className="app__header">
        <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="" className="app__headerImage"/>
      </div>
    
      <h1>Hello Developers, Let's build an instagram clone using React!</h1>
    
      <Post username="Ashay" caption="Wow it's superb!!" imageUrl="https://images.unsplash.com/photo-1524577292111-146a2d0e85a6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fHN0b3JhZ2V8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60"/>
      <Post username="Jacqueline" caption="Dopeee!!!" imageUrl="https://bit.ly/fcc-relaxing-cat"/>
      <Post username="Amanaath" caption="This is a fun project.." imageUrl="https://images.unsplash.com/photo-1553413077-190dd305871c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c3RvcmFnZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60"/>

    </div>
  );
}

export default App;
