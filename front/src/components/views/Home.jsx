
import NextButton from '../parts/Nextbutton'
import { member } from '../../data/member'
import twitter from '../../assets/img/twitter-logo.png'
import github from '../../assets/img/github-logo.png'
import logo from '../../assets/img/logo.png'
import { Footer } from '../layout/Footer'

const Home = () => {
  return (
      <div>
        <div className="mt-3 ml-4 text-2xl font-normal text-doer-purple sm:text-4xl">MeetHack</div>
        <div align="center">
          {/* <h1 className="text-4xl sm:text-6xl mt-24">MEET HACK</h1> */}
          <img src={logo} className="mt-12 mb-8"/>
          <h2 className="mx-2 mt-8
                        mb-20 text-sm leading-loose sm:text-xl">
                        新しい仲間とのつながり、HACKします<br></br>
                        MeetHackでよりはやく、よりスマートに交流しませんか
          </h2>
          <NextButton path="CreateRoom" name="はじめる"/>
        </div>

        <div align="center" className="mt-12">

          <div className="my-20 bg-thin-purple py-10 shadow-xl
                          sm:my-40 md:py-10">
            <div className="mb-8 text-xl
                          font-bold text-doer-purple
                            sm:text-2xl md:mb-10
                            md:mt-4">
                            CREATORS & CONTRIBUTORS
            </div>
              {member.map((memberData) => {
                return (
                  <div
                          className="mt-2 flex
                                  w-64 items-center justify-center justify-items-stretch rounded border-l-8
                                  border-thick-purple
                                bg-white py-3 px-6
                                  shadow-lg sm:h-16 sm:w-96
                                  sm:p-4">

                      <div className="grid w-4/5 grid-cols-1 sm:w-5/6 sm:grid-cols-2">
                        <a
                            className="flex justify-self-start
                                      align-middle text-lg
                                      text-gray-600 sm:p-5
                                      sm:text-xl">
                                      {memberData.name}

                        </a>
                        <p className="justify-content-center text-justify align-middle
                                      text-sm font-extralight
                                      text-gray-500 sm:px-5
                                      sm:py-4">
                                      {memberData.role}
                        </p>
                      </div>
                      <a
                          className="mr-2
                                    flex justify-self-start
                                    px-2 hover:opacity-70"
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
                )
              })}
          </div>
        </div>
        <div className="lg:mx-30 grid sm:grid-cols-2 md:mx-20">
          <div className="m-auto w-5/12 sm:w-2/3"><img src="https://images-ext-2.discordapp.net/external/qtfcHSSS-dP6AuQM5RKS5QFHCPsPyFtU5TqRAifP8AE/https/doer.vercel.app/og_img.png"></img></div>
          <div className="mx-4 mt-4 text-center">
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
  )
}

export default Home
