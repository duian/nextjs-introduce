import LatestInvoices from "@/app/ui/dashboard/latest-invoices";
import  RevenueChart from "@/app/ui/dashboard/revenue-chart";
import { fetchRevenue, fetchLatestInvoices } from "@/app/lib/data";


export default async function Page() {
  const revenue = await fetchRevenue();
  const latestInvoices = await fetchLatestInvoices();
  return (
    <main>
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <RevenueChart revenue={revenue} />
      <LatestInvoices latestInvoices={latestInvoices} />
    </main>
  )
}
