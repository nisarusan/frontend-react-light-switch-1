import React, { useState } from 'react';
import './App.css';

function App() {

    const [light, toggleLight] = useState(false);
    console.log(light ? "on" : "off" );
    return (
        <main className={light ? "on" : "off" }>
            <section>
                <div className="dot"></div>
                <button type="button" onClick={() => toggleLight(!light)}>{light === false ? "Turn on" : "Turn off"}</button>
            </section>
        </main>
    );
}

export default App;
