import { useRef } from "react";

export default function TiltCard({ children, className = "" }) {
  const ref = useRef(null);

  const move = (event) => {
    if (!ref.current || window.matchMedia("(pointer: coarse)").matches) return;

    const rect = ref.current.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    ref.current.style.transform =
      `perspective(1100px) rotateX(${y * -6}deg) rotateY(${x * 7}deg) translateY(-6px)`;
  };

  const leave = () => {
    if (ref.current) ref.current.style.transform = "";
  };

  return (
    <div
      ref={ref}
      className={`tilt-card ${className}`}
      onMouseMove={move}
      onMouseLeave={leave}
    >
      {children}
    </div>
  );
}