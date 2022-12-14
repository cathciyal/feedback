import React, { useState } from 'react';
import './App.css';


function App()
{
    const[Name,SetName]=useState("");
    const[Comments,setComments]=useState("");
    const[list,setList]=useState([]);

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(Name,Comments);
        const date={Name,Comments};
        if(Name&&Comments){
            setList((ls)=>[...ls,date])
            SetName("")
            setComments("")
        }
    }
    
    return (
        <div>
            <h1 style={{backgroundColor:"#00bfff",widht:"100%",height:"65px",color:"white"}}>Comments about Course</h1>
        
              {
                 
                 list.map((a)=>
                 <div style={{float:"left","marginLeft":"120px",width:"100%"}}>
                 <tag style={{fontWeight:"bold"}}>
                    {a.Name}</tag><br/>
                <tag >{a.Comments}</tag><br/><br/>
                </div>)
              } 
            <form onSubmit={handleSubmit} style={{float:'right'}}>
                <h2>Share your Experience</h2>
            <label>Name:</label><br/>
            <input type="text" value={Name} onChange={(e)=>SetName(e.target.value)}></input><br/>
            <label>Comments</label><br/>
            <textarea type="text" value={Comments} onChange={(e)=>setComments(e.target.value)}></textarea><br/>
            <input type="submit"  value="Post" style={{width: "100px",backgroundColor:"#00bfff",color:"white",height:"30px",borderRadius:"6px"}}/>

        </form>
       
        </div>
        
        

    );
}




export default App;