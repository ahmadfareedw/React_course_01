import { useState } from "react";
import Output from "./Output";

const Greeting = () => {
    const [changedText, setChangesText] = useState(false);

    const changeTextHandler = () => {
        setChangesText(true);
    }

    return (
        <div>
            <h2>Hello World!</h2>
            {!changedText && <Output>It's good to see you!</Output>}
            {changedText && <Output>Changed!</Output>}
            <button onClick={changeTextHandler}>Change Text!</button>
        </div>
    );
};

export default Greeting;