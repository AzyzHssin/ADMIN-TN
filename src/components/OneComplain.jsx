import React from "react";


class OneComplain  extends React.Component {
    constructor(props) {
      super(props);    
      console.log(props.oneComplain)
    }

    render(){
        return(    

<div className="Complaincard">
    <img src={this.props.oneComplain.userimage} className="userimageComplain"/>
    <div className="usernameComplain">{this.props.oneComplain.username}</div>
    <div className="dateComplain">{String(new Date(this.props.oneComplain.createdAt)).substring(0,25)}</div>
    <img src={this.props.oneComplain.image.uri} className="Complainimage"/>
    <div className="ComplainType">{this.props.oneComplain.type}</div>
    <div className="Complaindescription">{this.props.oneComplain.description}</div>
    {/* Ne9sa script localisation */}
    <button>Localisation</button>

    
</div>
               )
    }
}
export default OneComplain