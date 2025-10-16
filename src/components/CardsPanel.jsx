function BankCard({ className = "", color, brand = "VISA", tail = "6902", active }) {
  return (
    <div className={`relative h-32 rounded-3xl px-5 py-4 text-white bg-gradient-to-br ${color} border border-white/25 shadow ${className}`}>
      <div className="flex items-center justify-between text-sm">
        <span>{brand}</span>
        <span>**** {tail}</span>
      </div>
      <div className="absolute inset-x-0 bottom-2">
        <div className={`mx-3 h-14 rounded-2xl ${active ? "bg-white/20" : "bg-white/10"} backdrop-blur`} />
      </div>
      <div className="mt-6 text-xs flex items-center justify-between opacity-90">
        <span>Micky Larson</span>
        <span>07/25</span>
      </div>
    </div>
  );
}

export default function CardsPanel() {
  return (
    <div className="rounded-3xl p-4 bg-[#121A26] border border-white/10 shadow">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold">
          My cards <span className="text-white/50">3</span>
        </h3>
        <button className="h-8 px-3 rounded-full bg-white/10 border border-white/15">Add</button>
      </div>

      <div className="relative isolate">
        <BankCard
          className="translate-y-0 transition-transform duration-300 ease-out hover:-translate-y-3 hover:shadow-lg hover:shadow-white/10"
          color="from-amber-300 to-orange-400"
          brand="PayPal"
          tail="4352"
        />
        <BankCard
          className="-mt-16 translate-y-2 transition-transform duration-300 ease-out hover:-translate-y-3 hover:shadow-lg hover:shadow-white/10"
          color="from-emerald-300 to-teal-400"
          brand="Mastercard"
          tail="2368"
        />
        <BankCard
          className="-mt-16 translate-y-4 ring-1 ring-white/30 transition-transform duration-300 ease-out hover:-translate-y-3 hover:shadow-lg hover:shadow-white/10"
          color="from-indigo-400 to-violet-500"
          brand="VISA"
          tail="6902"
          active
        />
      </div>
    </div>
  );
}
