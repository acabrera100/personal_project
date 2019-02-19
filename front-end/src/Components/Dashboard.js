import React from 'react';
import "../CSS/Dashboard.css"


export default class Dashboard extends React.Component{
  constructor(){
    super()
    this.state={}
  }
render(){
  return(<div className="dashboard">
    <p>Hello this is the dashboard where all of your posts and feed from other people show up.
    This should be the page it routes you to after you login where it is your blog.\
    </p>
    <div className ="test">
      <div className= "avatar">
      <img  src='https://img.icons8.com/dotty/80/000000/user-male.png'alt="something"/>
      </div>
      <div className="post_type">
      This is where you can add TEXT IMAGE AUDIO OR (VIDEO)?
      <button><img src="https://img.icons8.com/material-outlined/24/000000/text.png"alt='something'/></button>
      </div>
    </div>


  </div>
)
}
}
