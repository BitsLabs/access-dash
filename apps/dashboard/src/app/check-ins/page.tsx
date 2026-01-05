import { DashboardHeader } from "../components/dashboard-header";
import { DashboardLayout } from "../components/dashboard-layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const checkInQueue = [
  {
    name: "Jordan Smith",
    className: "Power Yoga",
    time: "9:00 AM",
    result: "Approved",
  },
  {
    name: "Keisha Patel",
    className: "HIIT Lab",
    time: "9:15 AM",
    result: "Denied",
  },
  {
    name: "Luis Ortega",
    className: "Barre Flow",
    time: "9:30 AM",
    result: "Approved",
  },
];

const todaySchedule = [
  {
    className: "Power Yoga",
    time: "9:00 AM",
    eligibility: "Unlimited + Weekday tiers",
  },
  {
    className: "HIIT Lab",
    time: "12:00 PM",
    eligibility: "Unlimited + 4x Weekly",
  },
  {
    className: "Strength Fundamentals",
    time: "6:00 PM",
    eligibility: "All tiers except Weekend",
  },
];

export default function CheckInsPage() {
  return (
    <DashboardLayout>
      <DashboardHeader />
      <main className="flex-1 space-y-6 p-8 pt-6">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Check-ins</h2>
            <p className="text-sm text-muted-foreground">
              Validate member access and log attendance in real time.
            </p>
          </div>
          <Button size="sm">Open check-in screen</Button>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          <Card className="p-4 lg:col-span-2">
            <div className="space-y-1">
              <h3 className="text-lg font-semibold">Live queue</h3>
              <p className="text-sm text-muted-foreground">
                Sample check-in validations from the access engine.
              </p>
            </div>
            <div className="mt-4 space-y-3">
              {checkInQueue.map((entry) => (
                <div
                  key={`${entry.name}-${entry.time}`}
                  className="flex flex-wrap items-center justify-between gap-2 rounded-lg border border-border/60 p-3"
                >
                  <div>
                    <p className="text-sm font-semibold">{entry.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {entry.className} · {entry.time}
                    </p>
                  </div>
                  <span
                    className={`text-xs font-semibold ${
                      entry.result === "Approved"
                        ? "text-emerald-600"
                        : "text-rose-600"
                    }`}
                  >
                    {entry.result}
                  </span>
                </div>
              ))}
            </div>
          </Card>
          <Card className="p-4">
            <div className="space-y-1">
              <h3 className="text-lg font-semibold">Today&apos;s schedule</h3>
              <p className="text-sm text-muted-foreground">
                Eligible tiers by session.
              </p>
            </div>
            <div className="mt-4 space-y-3">
              {todaySchedule.map((session) => (
                <div key={session.className} className="space-y-1">
                  <p className="text-sm font-semibold">
                    {session.className}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {session.time}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {session.eligibility}
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
