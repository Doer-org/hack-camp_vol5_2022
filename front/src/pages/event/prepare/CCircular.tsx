import { FC, useEffect, useState } from "react"

interface IProps {
  percent: number
}

export const CCircular: FC<IProps> = ({ percent }) => {
  const [device, setDevice] = useState<"pc"|"sp">("pc")
  const [circumference, setCircumference] = useState<number>(60 * 2 * Math.PI)

  const updateWidth = (): void => {
    if (window.innerWidth > 1180) {
      setDevice("pc")
      setCircumference(60 * 2 * Math.PI)
    } else {
      setDevice("sp")
      setCircumference(144 * 2 * Math.PI)
    }
  }

  useEffect(() => {
    updateWidth()
    window.addEventListener('resize', updateWidth)
  }, [])

  return (
    <div className={"-rotate-90 items-center justify-center overflow-hidden rounded-full"}>
      {
        device === "pc"
          ?
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
          :
          <svg className="mx-auto h-96 w-96">
            <circle
              className="text-gray-200"
              strokeWidth="20"
              stroke="currentColor"
              fill="transparent"
              r="144"
              cx="192"
              cy="192"
            />
            {
              percent < 100
                ?
                <circle
                  className="text-doer-purple"
                  strokeWidth="20"
                  strokeDasharray={circumference}
                  strokeDashoffset={circumference - percent / 100 * circumference}
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="transparent"
                  r="144"
                  cx="192"
                  cy="192"
                />
                :
                <circle
                  className="text-green-600 opacity-70"
                  strokeWidth="20"
                  strokeDasharray={circumference}
                  strokeDashoffset={circumference - percent / 100 * circumference}
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="transparent"
                  r="144"
                  cx="192"
                  cy="192"
                />
            }
          </svg>
      }
    </div>
  )
}