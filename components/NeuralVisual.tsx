type NeuralVisualProps = {
  className?: string;
};

export function NeuralVisual({ className = "" }: NeuralVisualProps) {
  return (
    <svg
      viewBox="0 0 420 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`neural-visual pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      <circle cx="210" cy="210" r="170" className="neural-ring" strokeWidth="1.5" />
      <circle cx="210" cy="210" r="130" className="neural-ring neural-ring-delay" strokeWidth="1.5" />
      <circle cx="210" cy="210" r="90" className="neural-ring neural-ring-delay-2" strokeWidth="1.5" />

      <path
        d="M210 70 C140 110 105 175 120 240 C132 285 170 315 210 325 C250 315 288 285 300 240 C315 175 280 110 210 70Z"
        className="neural-outline"
        strokeWidth="2"
      />

      <path d="M210 120 L155 185" className="neural-path" />
      <path d="M210 120 L265 185" className="neural-path neural-path-delay" />
      <path d="M155 185 L120 255" className="neural-path neural-path-delay-2" />
      <path d="M265 185 L300 255" className="neural-path" />
      <path d="M155 185 L210 255" className="neural-path neural-path-delay" />
      <path d="M265 185 L210 255" className="neural-path" />
      <path d="M210 255 L210 325" className="neural-path neural-path-delay-2" />
      <path d="M120 255 L210 285" className="neural-path" />
      <path d="M300 255 L210 285" className="neural-path neural-path-delay" />
      <path d="M210 120 L210 70" className="neural-path neural-path-delay-2" />

      <circle cx="210" cy="120" r="7" className="neural-node" />
      <circle cx="155" cy="185" r="6" className="neural-node neural-node-delay" />
      <circle cx="265" cy="185" r="6" className="neural-node neural-node-delay-2" />
      <circle cx="120" cy="255" r="5" className="neural-node neural-node-delay" />
      <circle cx="300" cy="255" r="5" className="neural-node" />
      <circle cx="210" cy="255" r="6" className="neural-node neural-node-delay-2" />
      <circle cx="210" cy="285" r="5" className="neural-node neural-node-delay" />
      <circle cx="210" cy="325" r="5" className="neural-node" />
    </svg>
  );
}