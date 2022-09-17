import { gsap } from "gsap"

interface IUseAnimation {
  setAnimation: (targetID: string, text: string) => void
}

export const useAnimation = (): IUseAnimation => {
  // target についてアニメーションを定義
  const setAnimation = (targetID: string, text: string): void => {
    gsap.to(`#${targetID}`, {
      duration: 1.4,
      text: {
        value: text,
        delimiter: "",
      },
      ease: "ease"
    })
  }

  return { setAnimation }
}