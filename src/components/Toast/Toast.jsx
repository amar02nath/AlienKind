import './Toast.css'
export default function Toast({ message, visible }) {
  return (
    <div className={`toast${visible?' toast--visible':''}`} role="status" aria-live="polite" aria-atomic="true">
      <span className="toast__prefix" aria-hidden="true">&gt;&nbsp;</span>{message}
    </div>
  )
}
