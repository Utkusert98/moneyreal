export default function Panel({ title, rightSlot, children }) {
  return (
    <div className="rounded-3xl p-6 bg-[#121820] border border-white/10 shadow">
      <div className="mb-4 flex items-center justify-between">
        <h4 className="text-lg font-semibold">{title}</h4>
        {rightSlot}
      </div>
      {children}
    </div>
  );
}
