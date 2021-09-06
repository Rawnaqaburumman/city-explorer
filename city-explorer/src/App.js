import React, { Component } from 'react'
import axios from 'axios';
// import Alert from 'react-bootstrap/Alert'
import Card from 'react-bootstrap/Card'
// import ListGroup from 'react-bootstrap/ListGroup'
// import Form from 'react-bootstrap/Form'
import 'bootstrap/dist/css/bootstrap.min.css';

// import Button from 'react-bootstrap/Button '
export class App extends Component {

constructor(props){
  super(props)
  this.state={
    locationName:""  ,
    locationData: "",
    imageData:"",
    error: false
  }
}

handlelocation = (e)=>{
 
  
  this.setState({locationName:e.target.value})

  }










handlesubmit =async(e)=>{
  e.preventDefault();
 console.log("Hello");
  // if (this.state.locationName.length === 0){
  //   alert("error ,empyt field")
  // }



//   console.log(this.state.locationName)
//   //https://eu1.locationiq.com/v1/search.php?key=pk.561c2e75bb62b8d4e116f288ece4f189&q=Amman&format=json
//   const url = `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_IQ_KEY}&q=${this.state.locationName}&format=json`;
// console.log(url);

// const response = await axios.get(url);
// console.log(response[0]);
// this.setState(
//   {
//     locationData:response.data[0]
    
//   }
// )
// const url2 = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_IQ_KEY}&center=${[this.state.locationData.lat,this.state.locationData.lon]}&zoom=17&format=jpg`
// console.log(url2);
// const responsetwo = await axios.get(url2);
// console.log(responsetwo);

// this.setState(
//   {
//     imageData:responsetwo.request.responseURL
    
//   }
// )


}








  render(){
  return (



   
<>


    <div className="App" style={{color:"gray" ,padding:"20px"}}
    
    
    >
      <form onSubmit={this.handlesubmit}>  
        <input onChange={this.handlelocation} type="text" placeholder="Enter the name of city please"/>
        <input type="submit" value ="explorer"/>
      </form>


</div> 
 




<div style={{padding:"20px" }}>
<Card className="ListR" style={{ width: '18rem'  }}>
  <Card.Img variant="top" src={this.state.imageData}/>
  <Card.Body>
    <Card.Title> The City Name : {this.state.locationData.display_name}</Card.Title>
    <Card.Text> The latitude:
    {this.state.locationData.lat}
    </Card.Text>
    <Card.Text> The longitude:
    {this.state.locationData.lon}
    </Card.Text>
  
  </Card.Body>
</Card>
 </div>



    </>
  );}
}


export default App;
