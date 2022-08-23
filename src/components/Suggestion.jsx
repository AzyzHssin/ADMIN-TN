
import React from "react";
class Suggestion  extends React.Component {
    constructor(props) {
      super(props);    
      console.log()
    }

    render(){
        return(    

<div className="Complaincard">
    <img src={this.props.oneSuggestion.userimage} className="userimageComplain"/>
    <div className="usernameComplain">{this.props.oneSuggestion.username}</div>
   <img src={this.props.oneSuggestion.image.uri} className="Complainimage"/>
 
    <div className="Complaindescription">{this.props.oneSuggestion.description}</div>
    {/* Ne9sa script localisation */}
    <button>Localisation</button>

    
    </div>
               )
    }
}
export default Suggestion