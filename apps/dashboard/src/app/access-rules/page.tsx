import { DashboardHeader } from "../components/dashboard-header";
import { DashboardLayout } from "../components/dashboard-layout";
import { Card } from "@/components/ui/card";

const rules = [
  {
    title: "Unlimited tiers",
    detail: "Skip session caps for 12 plans with unlimited access enabled.",
    status: "Active",
  },
  {
    title: "Weekly frequency caps",
    detail: "4x Weekly and 8x Monthly plans enforce visit limits.",
    status: "Active",
  },
  {
    title: "Tiered schedule eligibility",
    detail: "Weekend-only tiers are blocked from weekday classes.",
    status: "Active",
  },
  {
    title: "Renewal grace window",
    detail: "24-hour access grace period after membership expiry.",
    status: "Active",
  },
];

const plans = [
  {
    plan: "Unlimited Monthly",
    access: "Any class, unlimited",
    renewal: "Monthly",
    enforcement: "No cap",
  },
  {
    plan: "4x Weekly",
    access: "All class types",
    renewal: "Weekly",
    enforcement: "4 check-ins",
  },
  {
    plan: "Weekday Access",
    access: "Mon–Fri only",
    renewal: "Monthly",
    enforcement: "2 peak blocks",
  },
];

export default function AccessRulesPage() {
  return (
    <DashboardLayout>
      <DashboardHeader />
      <main className="flex-1 space-y-6 p-8 pt-6">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Access Rules</h2>
            <p className="text-sm text-muted-foreground">
              Configure and monitor access policy enforcement.
            </p>
          </div>
          <span className="text-sm text-muted-foreground">
            Rules synced: 5 min ago
          </span>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {rules.map((rule) => (
            <Card key={rule.title} className="p-4">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold">{rule.title}</p>
                <span className="text-xs font-semibold text-emerald-600">
                  {rule.status}
                </span>
              </div>
              <p className="mt-2 text-xs text-muted-foreground">
                {rule.detail}
              </p>
            </Card>
          ))}
        </div>

        <Card className="p-6">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Plan mappings</h3>
            <p className="text-sm text-muted-foreground">
              Sample mapping of membership plans to access rules.
            </p>
          </div>
          <div className="mt-4 space-y-3">
            {plans.map((plan) => (
              <div
                key={plan.plan}
                className="flex flex-wrap items-center justify-between gap-2 rounded-lg border border-border/60 p-3"
              >
                <div>
                  <p className="text-sm font-semibold">{plan.plan}</p>
                  <p className="text-xs text-muted-foreground">
                    {plan.access}
                  </p>
                </div>
                <div className="text-right text-xs text-muted-foreground">
                  <p>Renewal: {plan.renewal}</p>
                  <p>Enforcement: {plan.enforcement}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </main>
    </DashboardLayout>
  );
}
