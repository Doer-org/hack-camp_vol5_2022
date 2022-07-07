import React from "react";
import { Link } from "react-router-dom";

// pathとnameが引数として親から渡されている
function NextButton({path,name}) {
    return(
        // Linkのto属性にpathを渡す
        <Link to={`${path}`} className="font-semibold rounded shadow-lg text-4xl bg-purple hover:bg-thick-purple text-white mt-44 font-bold py-4 px-20 rounded-full inline-block hover:shadow-sm hover:translate-y-0.5 transform transition">
            {name}
            {/* ブラウザに表示させる文字としてnameを渡す */}
        </Link>
    );
}

export default NextButton;