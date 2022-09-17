import { FC } from 'react'
import { AppContainer } from '@/components/layout/AppContainer'
import { Link } from 'react-router-dom'
import photo_step1 from '../../../src/assets/img/photo_step1.png'
import photo_step2 from '../../../src/assets/img/photo_step2.png'
import photo_step3 from '../../../src/assets/img/photo_step3.jpg'
import photo_step4 from '../../../src/assets/img/photo_step4.png'
import photo_step5 from '../../../src/assets/img/photo_step5.png'
import { StepBox } from './StepBox'
import { StepCardNum } from './StepCardNum'
import { StepImage } from './StepImage'

export const SecHowTo: FC = () => {
  return (
    <section className="py-36 lg:py-24">
      <AppContainer>
        <h3 className="text-center text-6xl font-bold tracking-wide text-doer-purple lg:text-3xl">
          How To Use
        </h3>
      </AppContainer>

      {/* ＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊ */}

      <div className="mx-auto px-2 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-6xl lg:max-w-2xl">
          {/* Step1 */}
          <div className="flex">
            <div className="mr-6 flex flex-col items-center">
              <div className="h-10 w-px opacity-0 sm:h-full" />
              <StepCardNum stepnum="1"> </StepCardNum>
              <div className="h-full w-px bg-gray-300" />
            </div>

            <div className="flex flex-col rounded-xl border border-gray-200 p-5 shadow-md sm:flex-row sm:items-center">
              <div className="mx-auto sm:mr-5">
                <StepImage>
                  <img
                    src={photo_step1}
                    className="mx-auto h-48"
                    alt="photo_step1"
                  />
                </StepImage>
              </div>
              <StepBox title="ルームを作る">
                <p className="text-gray-700 text-2xl lg:text-sm">
                  <Link
                    className="inline-block text-doer-purple underline"
                    to={'/CreateRoom'}
                  >
                    こちら
                  </Link>
                  でルーム名と参加人数を入力してルームを作成してください。
                  URLが発行されるので、メンバーに共有しましょう。
                </p>
              </StepBox>
            </div>
          </div>

          {/* step2 */}
          <div className="flex">
            <div className="mr-6 flex flex-col items-center">
              <div className="h-10 w-px bg-gray-300 sm:h-full" />
              <StepCardNum stepnum="2"> </StepCardNum>
              <div className="h-full w-px bg-gray-300" />
            </div>

            <div className="mt-10 flex flex-col rounded-xl border border-gray-200 p-5 shadow-md sm:flex-row sm:items-center">
              <div className="mx-auto sm:mr-5">
                <StepImage>
                  <img
                    src={photo_step2}
                    className="mx-auto h-48"
                    alt="photo_step2"
                  />
                </StepImage>
              </div>
              <StepBox title="プロフィールを登録">
                <p className="text-gray-700 text-2xl lg:text-sm">
                  プロフィールを登録してください。GitHubからログインできます。
                  ログインすると、前回入力した履歴が編集できて便利です。
                </p>
              </StepBox>
            </div>
          </div>

          {/* Step3 */}
          <div className="flex">
            <div className="mr-6 flex flex-col items-center">
              <div className="h-10 w-px bg-gray-300 sm:h-full" />
              <StepCardNum stepnum="3"> </StepCardNum>
              <div className="h-full w-px bg-gray-300" />
            </div>

            <div className="mt-10 flex flex-col rounded-xl border border-gray-200 p-5 shadow-md sm:flex-row sm:items-center">
              <div className="mx-auto sm:mr-5">
                <StepImage>
                  <img
                    src={photo_step3}
                    className="mx-auto h-60"
                    alt="photo_waitingmember"
                  />
                </StepImage>
              </div>
              <StepBox title="ルームに入る">
                <p className="text-gray-700 text-2xl lg:text-sm">
                  みんながルームに入るまで待ちましょう。
                  全員が入ると「準備完了」と表示されるので、スタートボタンを押しましょう。
                  <br />
                  <br />
                  <span className="text-gray-500 text-xl lg:text-sm">
                    ＊人数が、ルーム作成時の設定人数より少なくてもスタートできます。
                  </span>
                </p>
              </StepBox>
            </div>
          </div>

          {/* Step4 */}
          <div className="flex">
            <div className="mr-6 flex flex-col items-center">
              <div className="h-10 w-px bg-gray-300 sm:h-full" />
              <StepCardNum stepnum="4"> </StepCardNum>
              <div className="h-full w-px bg-gray-300" />
            </div>

            <div className="mt-10 flex flex-col rounded-xl border border-gray-200 p-5 shadow-md sm:flex-row sm:items-center">
              <div className="mx-auto sm:mr-5">
                <StepImage>
                  <img
                    src={photo_step4}
                    className="mx-auto h-60"
                    alt="photo_waitingmember"
                  />
                </StepImage>
              </div>
              <StepBox title="自己紹介スタート">
                <p className="text-gray-700 text-2xl lg:text-sm">
                  ランダムでメンバーが呼び出されます。
                  <br />
                  自己紹介を始めてください。
                  <br />
                  プロフィール入力時に自分が設定した質問がランダムで他のメンバーの元に届きます。
                </p>
              </StepBox>
            </div>
          </div>

          {/* Step5 */}
          <div className="flex">
            <div className="mr-6 flex flex-col items-center">
              <div className="h-10 w-px bg-gray-300 sm:h-full" />
              <StepCardNum stepnum="5"> </StepCardNum>
              <div className="h-full w-px opacity-0" />
            </div>

            <div className="mt-10 flex flex-col rounded-xl border border-gray-200 p-5 shadow-md sm:flex-row sm:items-center">
              <div className="mx-auto sm:mr-5">
                <StepImage>
                  <img
                    src={photo_step5}
                    className="mx-auto h-48"
                    alt="photo_step5"
                  />
                </StepImage>
              </div>
              <StepBox title="交流会終了後">
                <p>
                  参加メンバーのプロフィールが閲覧でき、TwitterやGitHubも気軽にフォローできます。
                  <br />
                  <br />
                  <span className="text-xs">
                    ＊URLを開けばいつでも履歴を見返してメンバー情報を確認できます。
                  </span>
                </p>
              </StepBox>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
