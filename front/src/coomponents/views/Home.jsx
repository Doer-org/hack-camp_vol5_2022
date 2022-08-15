import React from "react";
import NextButton from "../parts/Nextbutton";
import { member } from "../../data/member";
import twitter from "../../assets/img/twitter-logo.png";
import github from "../../assets/img/github-logo.png";
import logo from "../../assets/img/logo.png";
import { Footer } from "../layers/Footer";


const Home = () => {
    return (
      <div>
        <div className="font-normal mt-3 ml-4 text-2xl sm:text-4xl text-doer-purple">MeetHack</div>
        <div align="center">
          {/* <h1 className="text-4xl sm:text-6xl mt-24">MEET HACK</h1> */}
          <img src={logo} className="mt-12 mb-8"/>
          <h2 className="text-sm sm:text-xl 
                        mt-8 mb-20 leading-loose mx-2">
                        新しい仲間とのつながり、HACKします<br></br>
                        MeetHackでよりはやく、よりスマートに交流しませんか
          </h2>
          <NextButton path="CreateRoom" name="はじめる"/>
        </div>

        <div align="center" className="mt-12">
          
          <div className="shadow-xl my-20 sm:my-40 bg-thin-purple 
                          py-10 md:py-10">
            <div className="text-xl sm:text-2xl
                          text-doer-purple font-bold 
                            mb-8 md:mb-10
                            md:mt-4">
                            CREATORS & CONTRIBUTORS
            </div>
              {member.map((memberData) =>{
                return(
                  <div 
                          className="border-l-8 border-thick-purple 
                                  mt-2 py-3 px-6 sm:p-4 w-64 sm:w-96  
                                  sm:h-16
                                bg-white rounded shadow-lg  
                                  flex justify-center items-center 
                                  justify-items-stretch">
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 w-4/5 sm:w-5/6">    
                        <a 
                            className="text-lg sm:text-xl 
                                      text-gray-600 align-middle
                                      flex justify-self-start
                                      sm:p-5">
                                      {memberData.name}
                                    
                                      
                        </a>
                        <p className="text-sm font-extralight text-justify
                                      sm:px-5 sm:py-4
                                      text-gray-500 align-middle
                                      justify-content-center">
                                      {memberData.role}
                        </p>
                      </div>
                      <a 
                          className="px-2 
                                    flex justify-self-start 
                                    mr-2 hover:opacity-70"
                          href={`https://twitter.com/${memberData.twitter}`}
                          target="_blank"
                          rel="noopener noreferrer">
                          
                          <img 
                          className="w-[20px]" 
                          src={twitter} 
                          alt="Twitter" />
                            {/* <span className="ml-1 text-[0.8rem]">@{memberData.twitter}</span> */}
                      </a>
                      <a
                      className="flex justify-self-start hover:opacity-70"
                      href={`https://github.com/${memberData.github}`}
                      target="_blank"
                      rel="noopener noreferrer">
                        <img 
                          className="w-[20px]" 
                          src={github} 
                          alt="Twitter" />
                        {/* <span className="ml-1 text-[0.8rem]">@{memberData.github}</span> */}
                      </a>
                </div>
              );
            })}
          </div>
        </div>
        <div className="grid sm:grid-cols-2 md:mx-20 lg:mx-30">
          <div className="w-5/12 sm:w-2/3 m-auto"><img src="https://images-ext-2.discordapp.net/external/qtfcHSSS-dP6AuQM5RKS5QFHCPsPyFtU5TqRAifP8AE/https/doer.vercel.app/og_img.png"></img></div>
          <div className="mx-4 text-center mt-4">
            <h2 className="text-xl font-normal">同志社大学・同志社女子大学
            <br/>
            エンジニアのためのコミュニティ</h2>
            <br/>
            <p className="text-base text-gray-600">Do'erドゥアーは同志社大学・同志社女子大学の学生が所属するエンジニアサークルです。<br/>
技術のキャッチアップだけでなく、ハッカソン出場やチームメンバーの育成などキャリアに繋げられる活動を行っています。</p>
          </div>
        </div>
        <Footer />
      </div>
    );
};

export default Home