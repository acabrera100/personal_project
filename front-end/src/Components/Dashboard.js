import React from 'react';
import "../CSS/Dashboard.css"


export default class Dashboard extends React.Component{
  constructor(){
    super()
    this.state={}
  }
render(){
  return(<>
    <p>Hello this is the dashboard where all of your posts and feed from other people show up.
    This should be the page it routes you to after you login where it is your blog.\
    </p>
    <br/>
    <p>How about an avatar image? as a seperate div? </p>

    <div className="post_type">
      This is where you can add TEXT IMAGE AUDIO OR (VIDEO)?
    </div>


  </>
)
}
}
