import LatestInvoices from "@/app/ui/dashboard/latest-invoices";
import  RevenueChart from "@/app/ui/dashboard/revenue-chart";
import { fetchRevenue, fetchLatestInvoices } from "@/app/lib/data";


export default async function Page() {
  try {
    const [revenue, latestInvoices] = await Promise.all([
      fetchRevenue(),
      fetchLatestInvoices(),
    ]);

    return (
      <main>
        <h1 className={`mb-4 text-2xl font-bold`}>Dashboard</h1>
        <div className="grid gap-6">
          <RevenueChart revenue={revenue} />
          <LatestInvoices latestInvoices={latestInvoices} />
        </div>
      </main>
    );
  } catch (error) {
    console.error('Error loading dashboard data:', error);
    return <div>加载数据时出错。请稍后再试。</div>;
  }
}
