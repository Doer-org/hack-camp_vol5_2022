import React from "react";


function BaseButton({name, onClick}) {
    return(
        <button onClick={onClick} className="rounded-full shadow-2xl 
                            bg-purple hover:bg-thick-purple 
                            hover:shadow-sm hover:translate-y-0.5 
                            text-lg text-white font-medium 
                            py-2 px-4 
                            inline-block 
                            transform transition">
            {name}
        </button>
    );
}

export default BaseButton;