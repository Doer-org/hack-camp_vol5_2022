import React from "react";
import { Link } from "react-router-dom";


function NextButton({path,name}) {
    return(
        <Link to={`${path}`} className="font-semibold rounded shadow-lg text-2xl bg-purple hover:bg-thick-purple text-white font-bold py-4 px-14 rounded-full inline-block hover:shadow-sm hover:translate-y-0.5 transform transition">
            {name}
        </Link>
    );
}

export default NextButton;