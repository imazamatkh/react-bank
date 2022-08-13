import { arrowUp } from '../../assets'

export const GetStarted = () => (
  <div className={'flex justify-center items-center w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer'}>
    <div className={'flex justify-center items-center flex-col bg-primary w-[100%] h-[100%] rounded-full'}>
      <div className={'flex justify-center items-start flex-row'}>
        <div className={'font-medium text=[18px] leading-[23px] mr-2'}>
          <span className={'text-gradient'}>Get</span>
        </div>
        <img className={'w-[23px] h-[23px] object-contain'} src={ arrowUp } alt="Arrow Up" />
      </div>
      <div className={'font-medium text=[18px] leading-[23px]'}>
        <span className={'text-gradient'}>Started</span>
      </div>
    </div>
  </div>
)
