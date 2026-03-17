import './QuantityStepper.css'
export default function QuantityStepper({ qty, onAdd, onIncrease, onDecrease }) {
  if (qty === 0) {
    return (
      <button className="qty-stepper__add" onClick={onAdd} aria-label="Add to cart">
        [ + ADD ]
      </button>
    )
  }
  return (
    <div className="qty-stepper" role="group" aria-label="Quantity">
      <button className="qty-stepper__btn" onClick={onDecrease} aria-label="Decrease quantity">−</button>
      <span className="qty-stepper__num" aria-live="polite" aria-atomic="true">{qty}</span>
      <button className="qty-stepper__btn" onClick={onIncrease} aria-label="Increase quantity">+</button>
    </div>
  )
}
