import {FC} from "react"
import github from '../../assets/img/github_logo_button.png'
import RegisterNextButton from '../../components/parts/RegisterNextButton'

export const SecCard: FC =()=> {
    return (
        <section className="card flex flex-col items-center justify-center p-4 ">

                    {/* ----- 0 step ------ */}
        <div className="mb-12  block max-w-sm rounded-lg bg-white text-center shadow-lg">
                <div className="mb-4 rounded-t-lg bg-purple py-4 text-3xl font-bold tracking-wider text-white">
                    <p>参加者登録</p>
                </div>

            <div className="px-12 py-4 ">
                <div className="w-full w-60 px-2 py-1 my-10">
                    <p>SNS登録</p>
                    <br></br>
                </div>

                <button
                    className="
                            mb-4 flex
                            mx-auto
                            rounded 
                            bg-gray-900 py-2 px-8 text-2xl
                            font-semibold text-white shadow-lg transition
                            hover:translate-y-0.5 hover:bg-gray-700 hover:shadow-sm">
                <img src={ github } className="w-10 pr-2"/>
                GitHub
                </button>

                <RegisterNextButton path="" name="Next"/>
            </div>
            </div>
                </section>
    )
}