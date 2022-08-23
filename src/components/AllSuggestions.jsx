import React from "react";
import {firebase,db} from '../firebase/firebase'

  

class AllSuggestions  extends React.Component {
    constructor(props) {
      super(props); 
      this.state={Suggestion:[]}    
        
    }
    componentDidMount(){
        this.fetchSuggestion();
    }
    fetchSuggestion(){
        const ref=firebase.firestore().collection('Suggestions') ;
        ref.onSnapshot(querysnapshot=>{
            const list=[]
            querysnapshot.forEach(doc=>{
            
                list.push({ 
                    iduser:doc.iduser,
                   
                    image:doc.data().image,
                   
                    userimage:doc.data().userimage,
                    username:doc.data().username,
                    localisation:doc.data().localisation,
                    description:doc.data().description,
                    votes:doc.data().votes,
                    downvotes:doc.data().downvotes,
  
                })
            }); 
  
            
            this.setState({Suggestion:list})
            console.log(this.Suggestion)
        
        })
    }
    render(){
        return(    

<>
        {this.state.Suggestion.map(element=>{
            return(<div > </div>)
             })
            }</>)
    }
}
export default AllSuggestions