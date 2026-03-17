const AlienLogo = ({ width = 44, height = 34 }) => (
  <svg width={width} height={height} viewBox="0 0 44 34" fill="none" aria-hidden="true">
    <ellipse cx="22" cy="17" rx="21" ry="14" stroke="#FF2200" strokeWidth="1.1" opacity=".7"/>
    <ellipse cx="22" cy="17" rx="14" ry="14" stroke="#FF2200" strokeWidth=".8"  opacity=".52"/>
    <ellipse cx="22" cy="17" rx="7"  ry="14" stroke="#FF2200" strokeWidth=".65" opacity=".38"/>
    <circle  cx="22" cy="17" r="7.5"         stroke="#FF2200" strokeWidth="1.1" opacity=".82"/>
    <circle  cx="22" cy="15" r="3"            fill="#FF2200"/>
    <path d="M18.5 20 Q22 18.5 25.5 20" stroke="#FF2200" strokeWidth="1.1" fill="none" opacity=".82" strokeLinecap="round"/>
    <line x1="19.5" y1="18.5" x2="18.5" y2="21.5" stroke="#FF2200" strokeWidth=".9" opacity=".65"/>
    <line x1="24.5" y1="18.5" x2="25.5" y2="21.5" stroke="#FF2200" strokeWidth=".9" opacity=".65"/>
  </svg>
)
export default AlienLogo
