import { FC } from 'react'
import { AppContainer } from '@/components/layout/AppContainer'
import { MemberCard } from '@/components/parts/MemberCard'
import { memberData } from '@/data/member'

export const SecContributors: FC = () => {
  return (
    <section className="bg-thin-purple py-36 lg:py-24">
      <AppContainer>
        <h3 className="text-center text-6xl font-bold uppercase tracking-wide text-doer-purple lg:text-3xl">
          creators & contributors
        </h3>
        <div className="mx-10 mt-12 grid grid-cols-2 gap-y-8 lg:grid-cols-3">
          {memberData.map((member, idx) => {
            return (
              <div key={idx} className="mx-auto flex w-2/3 flex-col lg:w-4/5 ">
                <MemberCard member={member} />
              </div>
            )
          })}
        </div>
      </AppContainer>
    </section>
  )
}
