export default function TxRow({ icon, name, status, date, tail, delta }) {
  return (
    <div className="flex items-center justify-between rounded-2xl bg-white/5 border border-white/10 p-3">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 grid place-items-center rounded-xl bg-white/10">{icon}</div>
        <div>
          <div className="font-semibold">{name}</div>
          <div className="text-xs text-white/60">
            {date} <span className="ml-2 text-white/40">{tail}</span>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-xs px-2 py-1 rounded-full bg-emerald-400/20 text-emerald-300">{status}</span>
        <div className="font-semibold">{delta}</div>
      </div>
    </div>
  );
}
