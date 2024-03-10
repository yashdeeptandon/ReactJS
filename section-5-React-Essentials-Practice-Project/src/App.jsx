import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import { useState } from "react";
import Results from "./components/Results.jsx";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const isValidInput = userInput.duration >= 1;

  function handleUserInputChange(identifier, newValue) {
    setUserInput({
      ...userInput,
      [identifier]: +newValue, //! "+" is used before newValue to convert it into number. It was before of type string.
    });
  }

  return (
    <>
      <Header />
      <UserInput onInputChange={handleUserInputChange} userInput={userInput} />
      {!isValidInput && (
        <p className="center">Please enter a duration &gt; 0</p>
      )}
      {isValidInput && <Results input={userInput} />}
    </>
  );
}

export default App;
