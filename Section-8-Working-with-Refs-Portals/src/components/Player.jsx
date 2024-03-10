import { useState, useRef } from "react";

export default function Player() {
  const player = useRef();
  const [playerName, setPlayerName] = useState(null);

  function handleClick() {
    setPlayerName(player.current.value);
    /* current property is by default provided by ref which gives object containing the all the functions of that element */
  }

  return (
    <section id="player">
      <h2>Welcome {playerName ?? "Unknown entity"}</h2> 
      <p>
        <input type="text" ref={player} />
        {/* ref is the attribute in react which is used to access DOM nodes or react elements */}
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
