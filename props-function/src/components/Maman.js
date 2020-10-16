import React, {Component} from 'react';
import Toto from './Toto';
class Maman extends Component {
    state = {
        messageMaman: null,
        messageToto: null,
    }

    ordreMaman = () =>{
        this.setState({
            messageMaman:  'go cleaning your room'
        })
    }

    reponseToto = () =>{
        this.setState({
            messageToto:  'ok MOM'
        })
    }
render () {
    return (
       <div>
           <h1>Maman</h1>
<button onClick={this.ordreMaman}>Ordre de la mere</button>
    <p>{this.state.messageMaman}</p>
           <hr />
           <Toto name='Toto' reponseToto={this.reponseToto} leState={this.state}/>
       </div>
    )
}
}
export default Maman;