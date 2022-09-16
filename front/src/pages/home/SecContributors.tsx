import { FC } from 'react'
import { AppContainer } from '@/components/layout/AppContainer'
import { MemberCard } from '@/components/parts/MemberCard'
import { memberData } from '@/data/member'

export const SecContributors: FC = () => {
  return (
    <section className="flex  py-36 lg:py-24">
      <AppContainer>
        <h3 className="text-center text-6xl font-bold uppercase tracking-wide text-doer-purple lg:text-3xl">
          creators & contributors
        </h3>
        <div className="flex flex-wrap justify-center">
          <div className="mx-10 mt-20 grid grid-cols-2 flex-wrap justify-center gap-8 lg:grid-cols-3">
            {memberData.map((member, idx) => {
              return (
                <div
                  key={idx}
                  className="container mx-auto flex w-full flex-col flex-wrap justify-center rounded-lg border border-gray-200  shadow-md"
                >
                  <MemberCard member={member} />
                </div>
              )
            })}
          </div>
        </div>
      </AppContainer>
    </section>
  )
}
