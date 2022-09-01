import { FC } from "react"

interface IProps {
  max_member: number
  current: number
}

export const CCircularProgress: FC = () => {
  const circumference = 60 * 2 * Math.PI
  const percent = 30

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
        </svg>
      </div>
      <span className={"absolute top-1/2 left-1/2 block -translate-x-1/2 -translate-y-1/2 text-xl text-doer-purple"}>
        1 / 3
      </span>
    </div>
  )
}