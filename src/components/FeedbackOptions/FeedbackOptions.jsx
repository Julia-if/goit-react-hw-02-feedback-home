export const FeedbackOptions= ({options,  onLeaveFeedback})=>{
    return <div>
    {options.map(key=>(<button key={key} type='button' onClick={()=>{onLeaveFeedback(key)}}>{key}</button>))} 
    </div>
}