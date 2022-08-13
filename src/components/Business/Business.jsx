import { features} from '../../constants'
import { Button } from '../Button/Button'

const FeatureCard = ({icon, title, content, idx}) => (
  <div className={`flex p-6 rounded-[20px] ${idx !== features.length - 1 ? 'mb-6' : 'mb-0'} feature-card`}>
    <div className={'w-[64px] h-[64px] flex items-center justify-center rounded-full bg-dimBlue'}>
      <img className={'w-[50%] h-[50%] object-contain'} src={icon} alt={title} />
    </div>
    <div className={'flex-1 flex flex-col ml-3'}>
      <h4 className={'font-semibold text-white text-[18px] leading-[23px] mb-1'}>{title}</h4>
      <p className={'text-dimWhite leading-[24px] mb-1'}>{content}</p>
    </div>
  </div>
)

export const Business = () => (
  <section className={'business sm:py-16 py-6'} id={'features'}>
    <div className={'container'}>
      <div className={'business__inner flex md:flex-row flex-col'}>
        <div className={'business__info flex-1 flex justify-center items-start flex-col'}>
          <h2 className={'font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full'}>You do the business, <br className={'sm:block hidden'} /> we’ll handle the money.</h2>
          <p className={'text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-5'}>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
          <Button styles={'mt-10'} />
        </div>

        <div className={'flex-1 flex flex-col justify-center items-center md:ml-10 ml-0 md:mt-0 mt-10 relative'}>
          {features.map((feature, idx) => (
            <FeatureCard key={feature.id} {...feature} idx={idx} />
          ))}
        </div>
      </div>
    </div>
  </section>
)