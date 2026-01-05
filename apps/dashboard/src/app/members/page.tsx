import { DashboardHeader } from "../components/dashboard-header";
import { DashboardLayout } from "../components/dashboard-layout";
import { Card } from "@/components/ui/card";

const members = [
  {
    name: "Jordan Smith",
    memberId: "FA-1024",
    tier: "Unlimited Monthly",
    visits: "12 this month",
    status: "Active",
  },
  {
    name: "Keisha Patel",
    memberId: "FA-1048",
    tier: "4x Weekly",
    visits: "4 of 4 used",
    status: "Limit reached",
  },
  {
    name: "Luis Ortega",
    memberId: "FA-1103",
    tier: "Weekday Access",
    visits: "7 this month",
    status: "Active",
  },
  {
    name: "Sofia Alvarez",
    memberId: "FA-1172",
    tier: "Weekend Access",
    visits: "1 this month",
    status: "Restricted today",
  },
];

const healthStats = [
  {
    label: "Active memberships",
    value: "1,284",
    detail: "97% currently valid",
  },
  {
    label: "Upcoming renewals",
    value: "24",
    detail: "Next 7 days",
  },
  {
    label: "Weekly cap hits",
    value: "18",
    detail: "In the last 48 hours",
  },
];

export default function MembersPage() {
  return (
    <DashboardLayout>
      <DashboardHeader />
      <main className="flex-1 space-y-6 p-8 pt-6">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Members</h2>
            <p className="text-sm text-muted-foreground">
              Manage member profiles, tiers, and access eligibility.
            </p>
          </div>
          <span className="text-sm text-muted-foreground">
            Updated: Today, 9:32 AM
          </span>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {healthStats.map((stat) => (
            <Card key={stat.label} className="p-4">
              <p className="text-sm text-muted-foreground">{stat.label}</p>
              <p className="text-2xl font-semibold">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.detail}</p>
            </Card>
          ))}
        </div>

        <div id="active" className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">Active roster</h3>
            <p className="text-sm text-muted-foreground">
              Sample data ready to connect to your member database.
            </p>
          </div>
          <div className="grid gap-4 lg:grid-cols-2">
            {members.map((member) => (
              <Card key={member.memberId} className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold">{member.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {member.memberId} · {member.tier}
                    </p>
                  </div>
                  <span className="text-xs font-semibold text-muted-foreground">
                    {member.status}
                  </span>
                </div>
                <p className="mt-3 text-sm">Usage: {member.visits}</p>
              </Card>
            ))}
          </div>
        </div>

        <div id="profiles" className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">Membership profile notes</h3>
            <p className="text-sm text-muted-foreground">
              Notes highlight access rules, limits, and eligibility by tier.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="p-4">
              <p className="text-sm font-semibold">Unlimited Monthly</p>
              <p className="text-xs text-muted-foreground">
                Unlimited access to all classes, no weekly cap enforcement.
              </p>
            </Card>
            <Card className="p-4">
              <p className="text-sm font-semibold">4x Weekly</p>
              <p className="text-xs text-muted-foreground">
                Access capped at four check-ins per week; resets every Monday.
              </p>
            </Card>
          </div>
        </div>
      </main>
    </DashboardLayout>
  );
}
