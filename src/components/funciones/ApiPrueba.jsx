import { useEffect, useState } from "react";

function AñadirJoke(){

    const [broma,setBroma] = useState();

    useEffect (() => {
        fetch('https://v2.jokeapi.dev/joke/programming')
            .then(response => response.json())
            .then(data => {
                setBroma(data.delivery);
            });
        }, []);

        return <p>{broma}</p>

}

export default AñadirJoke