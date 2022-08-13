import { discount, robot } from '../../assets'
import { GetStarted } from '../GetStarted/GetStarted'


export const Hero = () => (
  <section className={'hero'} id={'home'}>
    <div className="container">
      <div className={'hero__inner flex md:flex-row flex-col sm:py-16 py-6'}>
        <div className={'flex-1 flex justify-center items-start flex-col'}>
          <div className={'flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'}>
            <img className={'w-[32px] h-[32px]'} src={discount} alt="Discount"/>
            <div className={'ml-2 text-dimWhite text-[18px] leading-[30.8px] uppercase'}>
              <span className={'text-white'}>20%</span> Discount for{' '}
              <span className={'text-white'}>1 MONTH</span> Account
            </div>
          </div>

          <div className={'flex justify-between items-center w-full'}>
            <h1 className={'flex-1 font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]'}>
              The Next <br className={'sm:block hidden'}/>
              <span className={'text-gradient'}>Generation</span>
            </h1>
            <div className={'ss:flex hidden md:mr-4 mr-0'}>
              <GetStarted/>
            </div>
          </div>
          <h1 className={'font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full'}>
            Payment Method.
          </h1>
          <p className={'text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-5'}>Our team of experts uses a
            methodology to identify the credit cards most likely to fit your needs.
            We examine annual percentage rates, annual fees.</p>
        </div>

        <div className={'flex-1 flex justify-center items-center md:my-0 my-10 relative'}>
          <img className={'w-[100%] h-[100%] relative z-[5]'} src={robot} alt="Robot" />
          <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
          <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
          <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        </div>

        <div className={'ss:hidden flex justify-center items-center'}>
          <GetStarted />
        </div>
      </div>
    </div>
  </section>
)
