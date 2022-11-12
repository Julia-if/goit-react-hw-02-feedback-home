export const Statistics = ({stats, total, positiveTotal})=>{
    return  <> <p>Statistics</p>
    <ul>
      {stats.map(([name, value])=>(<li key={name}>{name}:{value}</li>))}
    </ul>
    <p>Total: {total}</p>
      <p>Positive feedback: {positiveTotal}%</p>
    </>
   
}