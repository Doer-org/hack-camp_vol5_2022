import React from "react";

const About = () => {
    return(
        <div> 
            <div align="center">
                <h1 className="text-6xl mt-24">タイトル</h1>
                <h2 className="text-3xl mt-8" >About</h2>
            </div>

            <div align="center" className="mt-20">
                <div className="text-2xl">作った経緯</div>
                <div className="text-1xl border-l-8 border-purple inline-block rounded bg-thin-purple px-6 pt-4">ああああ</div>
            </div>
            <div align="center" className="mt-20">
                <div className="text-2xl">Skills</div>
                <div className="text-1xl border-l-8 border-purple inline-block rounded bg-thin-purple px-6 pt-4">ああああ</div>
            </div>

            <div align="center" className="mt-20">
                <div className="flex justify-center">
                    <svg className="h-8 w-8 text-Doer-purple fill-Doer-purple"  viewBox="0 0 24 24"    stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polygon points="5 3 19 12 5 21 5 3" /></svg>
                    <div className="text-2xl">バックエンドの人</div>
                </div>
            </div>

            <div align="center" className="mt-20">
                <div className="flex justify-center">
                    <svg className="h-8 w-8 text-Doer-purple fill-Doer-purple"  viewBox="0 0 24 24"    stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polygon points="5 3 19 12 5 21 5 3" /></svg>
                    <div className="text-2xl">フロントエンドの人</div>
                </div>
            </div>
        </div>
    )
};

export default About;