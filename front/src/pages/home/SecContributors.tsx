import {FC} from "react"
import {AppContainer} from "@/components/layout/AppContainer"
import {MemberCard} from "@/components/parts/MemberCard"
import {memberData} from "@/data/member"

export const SecContributors: FC = () => {
  return (
    <section className="bg-thin-purple py-24">
      <AppContainer>
        <h3 className="text-center text-3xl font-bold uppercase tracking-wide text-doer-purple">
          creators & contributors
        </h3>
        <div className="mt-20 grid grid-cols-2 gap-12">
          {memberData.map((member, idx) => {
            return(
              <div key={idx} className="col-span-1">
                <MemberCard member={member}/>
              </div>
            )
          })}
        </div>
      </AppContainer>
    </section>
  )
}