import {FC} from "react"
import {AppContainer} from "@/components/layout/AppContainer"

export const SecDoer: FC = () => {
  return(
    <section className="my-24">
      <AppContainer>
        <div className="grid items-center lg:grid-cols-2">
          <img
            className="mx-auto h-32"
            src="https://images-ext-2.discordapp.net/external/qtfcHSSS-dP6AuQM5RKS5QFHCPsPyFtU5TqRAifP8AE/https/doer.vercel.app/og_img.png"
            alt="Doerのロゴ"
          />
          <div className="mx-4 mt-4 text-center lg:text-left">
            <h2 className="text-4xl leading-relaxed lg:text-xl">
              同志社大学・同志社女子大学
              <br />
              エンジニアのためのコミュニティ
            </h2>
            <p className="mt-4 text-2xl leading-relaxed text-gray-600 lg:text-base">
              Do'er は同志社大学・同志社女子大学の学生が所属するエンジニアサークルです。
              <br />
              技術のキャッチアップだけでなく、ハッカソン出場やチームメンバーの育成などキャリアに繋げられる活動を行っています。
            </p>
          </div>
        </div>
      </AppContainer>
    </section>
  )
}