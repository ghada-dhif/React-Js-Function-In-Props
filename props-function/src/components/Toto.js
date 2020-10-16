import React, {Component} from 'react';


const Toto = props =>{
    console.log(props);
   const btnTotoReponse = props.leState.messageMaman !== null ? (<button onClick={props.reponseToto}>réponse</button>) : (<button disabled>réponse</button>);
    return(
        <div>
            <h2>
            {props.name}
            </h2>
            {btnTotoReponse}
    <p>{props.leState.messageToto}</p>
       </div>
    )
} 
export default Toto;