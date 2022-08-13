import { stats } from '../../constants'

export const Stats = () => (
  <section className={'stats'}>
    <div className={'container'}>
      <div className={'stats__inner flex justify-center items-center flex-wrap sm:mb-20 mb-6'}>
        {stats.map(stat => (
          <div className={'flex-1 flex justify-center items-center mr-3 mb-4 whitespace-nowrap'} key={stat.id}>
            <h4 className={'font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white'}>{stat.value}</h4>
            <p className={'xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3'}>{stat.title}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)
