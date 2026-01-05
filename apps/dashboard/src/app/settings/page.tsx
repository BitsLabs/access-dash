import { DashboardHeader } from "../components/dashboard-header";
import { DashboardLayout } from "../components/dashboard-layout";
import { Card } from "@/components/ui/card";

const settings = [
  {
    title: "Access engine",
    items: [
      "Real-time validation enabled",
      "Tier schedule checks active",
      "Grace period: 24 hours",
    ],
  },
  {
    title: "Check-in experience",
    items: [
      "One-tap validation screen",
      "Instant approval feedback",
      "Auto-log attendance events",
    ],
  },
  {
    title: "Security",
    items: [
      "Encrypted member data",
      "Audit logs retained 90 days",
      "Role-based staff access",
    ],
  },
];

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <DashboardHeader />
      <main className="flex-1 space-y-6 p-8 pt-6">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
            <p className="text-sm text-muted-foreground">
              Configure access workflows and operational defaults.
            </p>
          </div>
          <span className="text-sm text-muted-foreground">
            Environment: Production
          </span>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {settings.map((section) => (
            <Card key={section.title} className="p-4">
              <p className="text-sm font-semibold">{section.title}</p>
              <ul className="mt-3 space-y-2 text-xs text-muted-foreground">
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </main>
    </DashboardLayout>
  );
}
