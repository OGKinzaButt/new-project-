
import { useState } from "react";
import CountButtons from "./Components/CountButtons";
import Reset from "./Components/Reset";
import Title from "./Components/Title";
import Count from "./Components/Count";

export default function App (){
  const [count,setCount] = useState(0);
  return(
    <main>
      <div className="card">
        <Title />
        <Count count={count} />
        <Reset setCount={setCount}/>
        <CountButtons setCount={setCount}/>
        </div>
        </main>
  );
}