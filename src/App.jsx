import { Navbar, Hero, Stats, Business, Cta, Footer, Billing, Clients, CardDeal, Testimonials } from './components/index.js'

export const App = () => (
  <div className={'bg-primary w-full overflow-hidden'}>
    <Navbar />

    <main className={'main'} id={'main'}>
      <Hero />
      <div className={'bg-primary'}>
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <Cta />
      </div>
    </main>
    <div className={'bg-primary sm:px-16 px-6 flex justify-center items-center'}>
      <Footer />
    </div>
  </div>
)
