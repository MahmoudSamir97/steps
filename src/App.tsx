import { useState } from "react";
type Ex = {
  name: string;
  email: string;
};

function App() {
  const [step, setStep] = useState(false);
  console.log(setStep, step, "arrr");
  return (
    <>
      <h1>Steps</h1>
    </>
  );
}

export default App;
