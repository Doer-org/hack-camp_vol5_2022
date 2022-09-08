import { FC } from "react"

interface IProps {
  maxCount: number
  current: number
}

export const CCircularProgress: FC<IProps> = ({ maxCount, current }) => {
  const circumference = 60 * 2 * Math.PI
  const percent = 100 * current / maxCount <= 100 ? 100 * current / maxCount : 100

  return(
    <div className={"relative"}>
      <div
        className="-rotate-90 items-center justify-center overflow-hidden rounded-full"
      >
        <svg className="mx-auto h-40 w-40">
          <circle
            className="text-gray-200"
            strokeWidth="15"
            stroke="currentColor"
            fill="transparent"
            r="60"
            cx="80"
            cy="80"
          />
          {
            percent < 100
              ?
              <circle
                className="text-doer-purple"
                strokeWidth="15"
                strokeDasharray={circumference}
                strokeDashoffset={circumference - percent / 100 * circumference}
                strokeLinecap="round"
                stroke="currentColor"
                fill="transparent"
                r="60"
                cx="80"
                cy="80"
              />
              :
              <circle
                className="text-green-600 opacity-70"
                strokeWidth="15"
                strokeDasharray={circumference}
                strokeDashoffset={circumference - percent / 100 * circumference}
                strokeLinecap="round"
                stroke="currentColor"
                fill="transparent"
                r="60"
                cx="80"
                cy="80"
              />
          }
        </svg>
      </div>
      {
        percent < 100
          ?
          <span className={"absolute top-1/2 left-1/2 block -translate-x-1/2 -translate-y-1/2 text-xl text-doer-purple"}>
            {current} / {maxCount}
          </span>
          :
          <span className={"absolute top-1/2 left-1/2 block -translate-x-1/2 -translate-y-1/2 text-green-600"}>
            <span className={"mr-0.5 text-3xl"}>
              {current}
            </span>
            人
          </span>
      }
    </div>
  )
}