import { Search, Bell, User } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-[#0B0F14]/70 backdrop-blur-xl">
      <div className="mx-auto max-w-[1200px] px-6 py-4 flex items-center justify-between">
        {/* sol logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="h-9 w-9 rounded-xl bg-white/10 grid place-items-center">
            <span className="text-xl font-semibold">m</span>
          </div>
          <span className="text-[17px] tracking-wide text-white/80">moneyreal</span>
        </div>

        {/* orta nav (pill) */}
        <nav className="hidden md:block">
          <div className="rounded-full border border-white/15 bg-white/10 px-2 py-1 backdrop-blur">
            <ul className="flex items-center gap-1">
              {["Dashboard", "Statistics", "Transactions", "My wallet"].map((t, i) => (
                <li key={t}>
                  <button
                    className={
                      "px-4 py-2 rounded-full text-sm " +
                      (i === 0 ? "bg-white text-black shadow" : "text-white/80 hover:text-white")
                    }
                  >
                    {t}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* sağ aksiyonlar */}
        <div className="flex items-center gap-5">
          <Search className="w-10 h-10 text-white/70 rounded-full border border-white/15 bg-white/10 backdrop-blur px-2" />
          <Bell className="w-10 h-10 text-white/70 rounded-full border border-white/15 bg-white/10 backdrop-blur px-2" />
          <User className="w-10 h-10 text-white/70 rounded-full border border-white/15 bg-white/10 backdrop-blur px-2" />
        </div>
      </div>
    </header>
  );
}
