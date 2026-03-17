import './Hero.css'
export default function Hero() {
  return (
    <section className="hero" aria-label="Welcome banner">
      <p className="hero__eyebrow" aria-hidden="true">transmission received · sector 7G · earth delivery</p>
      <h1 className="hero__title">FUEL YOUR <span className="hero__title-dim">EXISTENCE.</span><span className="hero__cursor" aria-hidden="true"/></h1>
      <p className="hero__subtitle"><span aria-hidden="true">// </span>Interdimensional cuisine, sourced from the furthest corners of the known universe. Delivered to your coordinates in under 30 cycles.</p>
    </section>
  )
}
