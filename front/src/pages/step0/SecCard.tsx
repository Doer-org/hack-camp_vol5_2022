import {FC} from "react"
import { RegisterNextButton } from '../../components/parts/RegisterNextButton'
import { GitHubButton } from '../../components/parts/GitHubButton'

export const SecCard: FC =()=> {
    return (
        <section className="card flex flex-col 
                            justify-center
                            p-4 ">

                    {/* ----- 0 step ------ */}
        <div className="block max-w-sm rounded-lg bg-white text-center shadow-lg mx-auto">
                <div className="rounded-t-lg bg-purple py-4 text-3xl font-bold tracking-wider text-white">
                    <p>参加者登録</p>
                </div>

            <div className="px-12 py-4 ">
                <div className="w-60 px-2 py-1 my-10
                                text-xl">
                    <p>SNS登録</p>
                    <br></br>
                </div>

                <GitHubButton path=""/>
                <RegisterNextButton path="" name="Next"/>
            </div>
            </div>
        </section>
    )
}