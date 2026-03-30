
  export default function Count({count}){
    const isLimitReached = count === 5 || count === -5
    return(
        <>
       <p className="count">{count} </p>
       {isLimitReached && (
        <p className="limit-message"> STOP!</p>
       )}
            </>
    );
}