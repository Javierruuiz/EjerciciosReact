import { useState } from "react";

export function Ejer7() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const handleGreet = () => {
      alert(`Hello ${firstName} ${lastName}!`);
    };

    return (
      <>
        <div>
          
          <input
            type="text"
            placeholder="First name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <br />
          <input
            type="text"
            placeholder="Last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <br />
          <button onClick={handleGreet}>
            GREET ME
          </button>
        </div>
      </>
    );
}
