import { FC, useEffect, useState } from "react"

interface IProps {
  percent: number
}

export const CCircular: FC<IProps> = ({ percent }) => {
  const [device, setDevice] = useState<"pc"|"sp">("pc")
  const [circumference, setCircumference] = useState<number>(60 * 2 * Math.PI)
  const BASE_PARAM_PC = 60
  const BASE_PARAM_SM = 144

  const updateWidth = (): void => {
    if (window.innerWidth > 1180) {
      setDevice("pc")
      setCircumference(BASE_PARAM_PC * 2 * Math.PI)
    } else {
      setDevice("sp")
      setCircumference(BASE_PARAM_SM * 2 * Math.PI)
    }
  }

  useEffect(() => {
    updateWidth()
    window.addEventListener('resize', updateWidth)
  }, [])

  return (
    <div className={"items-center justify-center overflow-hidden rounded-full"}> 
      {
        device === "pc"
          ?
          <svg className="mx-auto h-40 w-40 -rotate-90">
            <circle
              className="text-gray-200"
              strokeWidth="15"
              stroke="currentColor"
              fill="transparent"
              r={BASE_PARAM_PC}
              cx={BASE_PARAM_PC * 4 / 3}
              cy={BASE_PARAM_PC * 4 / 3}
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
                  r={BASE_PARAM_PC}
                  cx={BASE_PARAM_PC * 4 / 3}
                  cy={BASE_PARAM_PC * 4 / 3}
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
                  r={BASE_PARAM_PC}
                  cx={BASE_PARAM_PC * 4 / 3}
                  cy={BASE_PARAM_PC * 4 / 3}
                />
            }
          </svg>
          :
          <svg className="mx-auto h-96 w-96 -rotate-90">
            <circle
              className="text-gray-200"
              strokeWidth="20"
              stroke="currentColor"
              fill="transparent"
              r={BASE_PARAM_SM}
              cx={BASE_PARAM_SM * 4 / 3}
              cy={BASE_PARAM_SM * 4 / 3}
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
                  r={BASE_PARAM_SM}
                  cx={BASE_PARAM_SM * 4 / 3}
                  cy={BASE_PARAM_SM * 4 / 3}
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
                  r={BASE_PARAM_SM}
                  cx={BASE_PARAM_SM * 4 / 3}
                  cy={BASE_PARAM_SM * 4 / 3}
                />
            }
          </svg>
      }
    </div>
  )
}