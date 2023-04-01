import { useRef } from "react";
import { useNavigate } from 'react-router-dom'
import Backdrop from './Backdrop'
import NextButton from './NextButton'
import CloseButton from "./CloseButton";
import { useSpotlight } from './useSpotlight'
import Counter from "./Counter";
import { useOnboardingInternal } from './useOnboardingInternal'
import { useArrowUp } from "./useArrowUp";
import commonClasses from './common.module.css'

const SecondPage = () => {
  const navigate = useNavigate()
  const textWrapperRef = useRef()
  const arrowRef = useRef()
  const { spotlightRef } = useOnboardingInternal()

  useSpotlight()

  /** useArrow must go only after useSpotlight */
  useArrowUp({
    left: 'calc(50% - 150px)',
    spotlightRef,
    textWrapperRef,
    arrowRef
  })

  return (
    <>
      <CloseButton />
      <Counter />
      <Backdrop>
        <div
          ref={textWrapperRef}
          className={commonClasses.textWrapper}
          style={{
            position: 'absolute',
            top: 300,
            width: 'calc(100vw - 60px)'
          }}
        >
          <div className={commonClasses.header}>Отправить статью</div>
          <p className={commonClasses.text}>(Мы принимаем авторские материалы по теме комьюнити с редакционной поддержкой с нашей стороны)</p>
          <NextButton
            onClick={() => {
              navigate('/moove?onboarding=true')
            }}
          >Понятно, давай дальше</NextButton>
        </div>
        <div
          className={commonClasses.arrowDown}
          style={{
            position: 'absolute',
            top: 500,
            left: 'calc(50% + 50px)',
            width: 110,
            height: 174
          }}
        />
      </Backdrop>
    </>
  )
}

export default SecondPage
