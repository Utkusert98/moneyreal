import { Search, Bell, User } from "lucide-react";
import { FaApple, FaDiscord, FaTelegram, FaDribbble } from "react-icons/fa";
import Header from "./components/Header";
import BalanceCard from "./components/BalanceCard";
import StatCard from "./components/StatCard";
import Panel from "./components/Panel";
import MiniBars from "./components/MiniBars";
import CardsPanel from "./components/CardsPanel";
import SubscriptionsPanel from "./components/SubscriptionsPanel";
import TxRow from "./components/TxRow";
import Chip from "./components/Chip";
import ExpenseSplit from "./components/ExpenseSplit"; 

export default function App() {
  const income = 2456;
  const expense = 1124;

  return (
    <div className="font-[Comfortaa] min-h-screen bg-[#0B0F14] text-white">
      <Header />

      {/* MAIN */}
      <main className="mx-auto max-w-[1200px] px-6 py-8">
        <h1 className="mb-6 text-4xl font-semibold">My Dashboard</h1>

        {/* ana grid: sol 2 sütun, sağ 1 sütun */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* SOL BLOK (2 sütun) */}
          <section className="lg:col-span-2 space-y-8">
            {/* üst sıra: balance + (income,expense) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <BalanceCard className="md:col-span-2" />

              <div className="flex flex-col gap-8">
                <StatCard
                  title="Income"
                  value={`+${income.toLocaleString("en-US")}`}
                  chip="+15.7%"
                  theme="income"
                />
                <StatCard
                  title="Expense"
                  value={`-${expense.toLocaleString("en-US")}`}
                  chip="-10.7%"
                  theme="expense"
                />
              </div>
            </div>

            {/* orta sıra: revenue flow + expense split */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Panel title="Revenue flow" rightSlot={<Chip>Monthly</Chip>}>
                <MiniBars />
              </Panel>

              <Panel title="Expense split" rightSlot={<Chip>Aug</Chip>}>
                <ExpenseSplit />
              </Panel>
            </div>

            {/* alt sıra: recent transactions */}
            <Panel
              title="Recent transactions"
              rightSlot={<a className="text-white/60 hover:text-white" href="#">See all ▸</a>}
            >
              <div className="space-y-3">
                <TxRow
                  icon="💬"
                  name="Telegram"
                  status="Successful"
                  date="04.07.2023 12:40 AM"
                  tail="*4352"
                  delta="-$4.99"
                />
                <TxRow
                  icon="🍎"
                  name="iCloud"
                  status="Successful"
                  date="Next 15 July"
                  tail="*6902"
                  delta="-$2.99"
                />
              </div>
            </Panel>
          </section>

          {/* SAĞ PANEL */}
          <aside className="space-y-8">
            <CardsPanel />
            <SubscriptionsPanel />
          </aside>
        </div>
      </main>
    </div>
  );
}
