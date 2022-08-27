import {FC} from "react"
import { RegisterNextButton } from '../../components/parts/RegisterNextButton'
import { GitHubButton } from '../../components/parts/GitHubButton'
import { RegisterCardTemprate } from './RegisterCardTemprate'
import { RegisterCardHead } from "./RegisterCardHead"
import { RegisterCardBody} from "./RegisterCardBody"

export const SecCard: FC =()=> {
    return (
        <>
            {/* ----- 0 step ------ */}
            <RegisterCardTemprate>
                <RegisterCardHead name="参加者登録" children/>

                <RegisterCardBody>
                    <div className="w-60 px-2 py-2 my-10
                                    text-xl">
                        <p>SNS登録</p>
                    </div>

                    <GitHubButton path=""/>
                    <RegisterNextButton path="" name="Next"/>

                </RegisterCardBody>
            </RegisterCardTemprate>
        </>
    )
}