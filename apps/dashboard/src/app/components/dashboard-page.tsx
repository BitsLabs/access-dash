import { DashboardHeader } from "./dashboard-header";
import { DashboardLayout } from "./dashboard-layout";
import { MetricCards } from "./metric-cards";
import { RecentActivity } from "./recent-activity";
import { WeeklyChart } from "./weekly-chart";
import { Card } from "@/components/ui/card";

export default function Dashboard() {
  // This data could come from a database or API call in a real application
  const chartData = [
    { day: "Mon", value: 142, color: "hsl(var(--primary))" },
    { day: "Tue", value: 176, color: "hsl(var(--chart-1))" },
    { day: "Wed", value: 161, color: "hsl(var(--chart-2))" },
    { day: "Thu", value: 195, color: "hsl(var(--chart-3))" },
    { day: "Fri", value: 188, color: "hsl(var(--chart-4))" },
  ];

  return (
    <DashboardLayout>
      <DashboardHeader />
      <main className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">
              Flits Access Dashboard
            </h2>
            <p className="text-sm text-muted-foreground">
              Real-time membership access, attendance, and tier analytics.
            </p>
          </div>
          <div className="text-sm text-muted-foreground">
            Last sync: Today, 9:32 AM
          </div>
        </div>
        <div className="space-y-4">
          <MetricCards />
          <div className="grid gap-4 lg:grid-cols-7">
            <WeeklyChart chartData={chartData} />
            <Card className="col-span-3">
              <div className="space-y-4 p-6">
                <div>
                  <h3 className="text-lg font-semibold">Access Alerts</h3>
                  <p className="text-sm text-muted-foreground">
                    Items needing attention before the next class block.
                  </p>
                </div>
                <div className="space-y-3">
                  {[
                    {
                      title: "18 members hitting weekly caps",
                      detail: "Recommend upsell to unlimited tiers",
                      tone: "bg-amber-500/15 text-amber-600",
                    },
                    {
                      title: "6 expired plans attempted entry",
                      detail: "Access denied, renewals pending",
                      tone: "bg-rose-500/15 text-rose-600",
                    },
                    {
                      title: "Tier schedule mismatch",
                      detail: "Weekend tiers blocked on weekday sessions",
                      tone: "bg-sky-500/15 text-sky-600",
                    },
                  ].map((alert) => (
                    <div
                      key={alert.title}
                      className="space-y-1 rounded-lg border border-border/60 p-3"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">
                          {alert.title}
                        </span>
                        <span
                          className={`rounded-full px-2 py-0.5 text-xs font-semibold ${alert.tone}`}
                        >
                          Alert
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {alert.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
          <div className="grid gap-4 lg:grid-cols-7">
            <div className="lg:col-span-4">
              <RecentActivity />
            </div>
            <Card className="lg:col-span-3">
              <div className="space-y-4 p-6">
                <div>
                  <h3 className="text-lg font-semibold">Membership Tiers</h3>
                  <p className="text-sm text-muted-foreground">
                    Utilization and access rule highlights.
                  </p>
                </div>
                <div className="space-y-4">
                  {[
                    {
                      name: "Unlimited Monthly",
                      members: "412 active members",
                      usage: 84,
                      rule: "Any class, unlimited check-ins",
                    },
                    {
                      name: "4x Weekly",
                      members: "286 active members",
                      usage: 68,
                      rule: "4 sessions per week",
                    },
                    {
                      name: "Weekday Access",
                      members: "198 active members",
                      usage: 59,
                      rule: "Mon–Fri only, 2 peak-time blocks",
                    },
                  ].map((tier) => (
                    <div key={tier.name} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium">{tier.name}</p>
                          <p className="text-xs text-muted-foreground">
                            {tier.members}
                          </p>
                        </div>
                        <span className="text-sm font-semibold">
                          {tier.usage}%
                        </span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-muted">
                        <div
                          className="h-2 rounded-full bg-primary"
                          style={{ width: `${tier.usage}%` }}
                        />
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {tier.rule}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <div className="space-y-4 p-6">
                <div>
                  <h3 className="text-lg font-semibold">Class Popularity</h3>
                  <p className="text-sm text-muted-foreground">
                    Sessions with highest utilization this week.
                  </p>
                </div>
                <div className="space-y-3">
                  {[
                    {
                      name: "Power Yoga",
                      detail: "92% average fill rate",
                      note: "Peak: Tue/Thu 6 PM",
                    },
                    {
                      name: "HIIT Lab",
                      detail: "88% average fill rate",
                      note: "Peak: Wed 7 AM",
                    },
                    {
                      name: "Barre Flow",
                      detail: "81% average fill rate",
                      note: "Peak: Fri 5 PM",
                    },
                  ].map((entry) => (
                    <div
                      key={entry.name}
                      className="flex items-center justify-between rounded-lg border border-border/60 p-3"
                    >
                      <div>
                        <p className="text-sm font-medium">{entry.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {entry.note}
                        </p>
                      </div>
                      <p className="text-sm font-semibold">{entry.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
            <Card>
              <div className="space-y-4 p-6">
                <div>
                  <h3 className="text-lg font-semibold">
                    Access Rules Snapshot
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Active enforcement policies in the access engine.
                  </p>
                </div>
                <div className="space-y-3">
                  {[
                    {
                      title: "Unlimited tiers skip session caps",
                      detail: "12 plans mapped to unlimited access",
                    },
                    {
                      title: "Weekly caps enforced",
                      detail: "4x Weekly and 8x Monthly tracked",
                    },
                    {
                      title: "Tier eligibility by schedule",
                      detail: "Weekend-only tiers blocked on weekdays",
                    },
                    {
                      title: "Renewal grace period",
                      detail: "24-hour access window post-expiry",
                    },
                  ].map((rule) => (
                    <div key={rule.title} className="space-y-1">
                      <p className="text-sm font-medium">{rule.title}</p>
                      <p className="text-xs text-muted-foreground">
                        {rule.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </DashboardLayout>
  );
}
