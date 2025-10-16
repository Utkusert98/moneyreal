export default function Chip({ children }) {
  return (
    <span className="text-xs text-white/80 bg-white/10 border border-white/15 px-2 py-1 rounded-full">
      {children}
    </span>
  );
}
