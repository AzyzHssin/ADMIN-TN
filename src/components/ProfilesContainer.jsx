import React from "react";
import Oneprofile from "./Oneprofile";
import {firebase,db} from '../firebase/firebase'

  

class ProfilesContainer  extends React.Component {
    constructor(props) {
      super(props); 
      this.state={profiles:[]}    
      this.codeleteUser = this.codeleteUser.bind(this)    
    }
    componentDidMount(){
        this.fecthProfiles();
    }

   
    codeleteUser = (id) => {
       var usersRef= firebase.firestore().collection("Complains");
       usersRef.doc(id)
          .delete()
          .then(() => {})
          .catch((e) => console.log(e));
        alert("users has been banned")
      };

    fecthProfiles=()=>{
 
        const ref=firebase.firestore().collection('users') 
        
           ref.onSnapshot(querysnapshot=>{
              const list=[]
              querysnapshot.forEach(doc=>{
              
                  list.push({ 
                      id:doc.id,
                      fullName:doc.data().fullName,
                      image:doc.data().image,
                      email:doc.data().email,
                      phoneNumber:doc.data().phoneNumber,
                      adress:doc.data().adress,
                    
    
                  })
              }); 
    
              
              this.setState({profiles:list})
              console.log(this.profiles)
          
          })
        }
    render(){
        return(    

<>
        {this.state.profiles.map(element=>{
       
            return(<div ><Oneprofile  codeleteUser={this.codeleteUser} changeProfile={this.props.changeProfile} oneuser={element} /></div>)
             })
            }</>)
    }
}
export default ProfilesContainer