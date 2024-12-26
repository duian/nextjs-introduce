import  RevenueChart from "@/app/ui/dashboard/revenue-chart";
import { fetchRevenue } from "@/app/lib/data";

export default async function Page() {
  const revenue = await fetchRevenue();
  return (
    <main>
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <RevenueChart revenue={revenue} />
    </main>
  )
}
