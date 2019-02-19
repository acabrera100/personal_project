import React from 'react';

export default class Dashboard extends React.Component{
  constructor(){
    super()
    this.state={}
  }
render(){
  return(<>
    <form>
    <input type="text" placeholder="Searchbar(Not working)"/>
    </form>
    Hello this is the dashboard where all of your posts and feed from other people show up.
    This should be the page it routes you to after you login where it is your blog.
  </>
)
}
}
