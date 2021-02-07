import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import react from 'react'
import {Card,Button} from 'react-bootstrap'
import img from './bassem.jpg'


class appl extends Component {
  constructor(props) {
  
    super(props);
    this.state = { 
      comp:0,
      isShow:true,
      hours: 0,
      minutes: 0,
      seconds: 0,
     }
  }
 

  componentDidMount() {
    setInterval(() =>{ 
      this.setState({
       seconds:this.state.seconds+1,
       })
       if(this.state.seconds===60){
         this.setState({
           minutes:this.state.minutes+1,
           seconds:this.state.seconds=0
         })
         if(this.state.minutes  ===60){
           this.setState({
             hours:this.state.hours+1,
             minutes:this.state.minutes=0,
             seconds:this.state.seconds=0
           })
         }
       };
     },1000)
 }
  show = () => {
    this.setState ({ 
      isShow :!this.state.isShow,
    })
  }
  render() { 
    return ( 
      <div  className="column" style={{backgroundColor: '#2e77ae'}}>
        <h1 >Time :
          <span >{this.state.hours}</span>: 
          <span >{this.state.minutes}</span>: 
          <span >{this.state.seconds}</span> 
        </h1>
        <div style={{marginLeft:'100px', marginTop:'-50px'}}>
          
          <Button style={{marginLeft:'150px',backgroungColor:"#e0eaf5" }} variant="danger" onClick={this.show}>show me</Button>
        
            {(this.state.isShow)?
            <div >
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body style={{color:"#e0eaf5"}} >
                    <Card.Title style={{color:"#AAC9CE"}}>Bassem Ltaief</Card.Title>
                    <Card.Text>This is probably the clearest I've ever watched anyone explain async/await and promises before. Well done!</Card.Text>
                    <Card.Text>Telecommunication network engineer and futur Jr Developper</Card.Text>
                </Card.Body>
              </Card>
            </div>:<h1 style={{color:"#ff8e2b"}}>Show the carte</h1>}
       </div>
    </div> );
  }
}
 
export default appl;
