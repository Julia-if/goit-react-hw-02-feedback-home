import React, { Component } from "react";
import { Statistics } from "./Statistics/Statistics";
import {FeedbackOptions} from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification";

export class App extends Component {
state={
  good: 0,
  neutral: 0,
  bad: 0
};
onLeaveFeedback = item => {
  this.setState(prevState => {
    return {
      [item]: prevState[item] + 1,
    };
  });
};
onTotaler = ()=>{
return Object.values(this.state).reduce((acc, value)=> value+acc,0)
}
onPositiveTotaler =()=>{
 return  Math.round((this.state.good/this.onTotaler())*100);
}
render(){
  const options = Object.keys(this.state);
  const stats= Object.entries(this.state);
  const positiveTotal = this.onPositiveTotaler();
  const total = this.onTotaler();
  return (
    <>
    <Section title ='Please leave feedback'>
       <FeedbackOptions options={options} onLeaveFeedback={this.onLeaveFeedback}/></Section> 
       {!total&&<Notification message='There is no feedback' />}
      {total>0&&<Statistics stats={stats} positiveTotal={positiveTotal} total={total}></Statistics>}     
      
   
    </>
   );
}
  
};
