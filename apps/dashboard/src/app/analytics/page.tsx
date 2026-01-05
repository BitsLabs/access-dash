import { DashboardHeader } from "../components/dashboard-header";
import { DashboardLayout } from "../components/dashboard-layout";
import { WeeklyChart } from "../components/weekly-chart";
import { Card } from "@/components/ui/card";

const chartData = [
  { day: "Mon", value: 142, color: "hsl(var(--primary))" },
  { day: "Tue", value: 176, color: "hsl(var(--chart-1))" },
  { day: "Wed", value: 161, color: "hsl(var(--chart-2))" },
  { day: "Thu", value: 195, color: "hsl(var(--chart-3))" },
  { day: "Fri", value: 188, color: "hsl(var(--chart-4))" },
];

const analyticsHighlights = [
  {
    label: "Average attendance per member",
    value: "5.1 visits/month",
    detail: "Up 0.6 from last month",
  },
  {
    label: "Plan utilization",
    value: "74%",
    detail: "Based on weekly caps",
  },
  {
    label: "Drop-off risk",
    value: "36 members",
    detail: "No check-ins in 14+ days",
  },
];

const classPopularity = [
  {
    className: "Power Yoga",
    attendance: "92% average fill",
    insight: "Highest weekday demand",
  },
  {
    className: "HIIT Lab",
    attendance: "88% average fill",
    insight: "Strong morning attendance",
  },
  {
    className: "Barre Flow",
    attendance: "81% average fill",
    insight: "Peak on Friday evenings",
  },
];

export default function AnalyticsPage() {
  return (
    <DashboardLayout>
      <DashboardHeader />
      <main className="flex-1 space-y-6 p-8 pt-6">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Analytics</h2>
            <p className="text-sm text-muted-foreground">
              Attendance trends and access utilization metrics.
            </p>
          </div>
          <span className="text-sm text-muted-foreground">
            Reporting window: Last 7 days
          </span>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {analyticsHighlights.map((item) => (
            <Card key={item.label} className="p-4">
              <p className="text-sm text-muted-foreground">{item.label}</p>
              <p className="text-2xl font-semibold">{item.value}</p>
              <p className="text-xs text-muted-foreground">{item.detail}</p>
            </Card>
          ))}
        </div>

        <div className="grid gap-4 lg:grid-cols-7">
          <WeeklyChart chartData={chartData} />
          <Card className="lg:col-span-3 p-6">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Class popularity</h3>
              <p className="text-sm text-muted-foreground">
                Top sessions by attendance utilization.
              </p>
            </div>
            <div className="mt-4 space-y-3">
              {classPopularity.map((entry) => (
                <div key={entry.className} className="space-y-1">
                  <p className="text-sm font-semibold">{entry.className}</p>
                  <p className="text-xs text-muted-foreground">
                    {entry.attendance}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {entry.insight}
                  </p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </main>
    </DashboardLayout>
  );
}
