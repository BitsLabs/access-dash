import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const activities = [
  {
    name: "Jordan Smith",
    action: "Checked in to Power Yoga • Unlimited Monthly",
    timestamp: "2 min ago",
    status: "Approved",
  },
  {
    name: "Keisha Patel",
    action: "Reached weekly limit for HIIT Lab • 4x Weekly",
    timestamp: "12 min ago",
    status: "Denied",
  },
  {
    name: "Luis Ortega",
    action: "Checked in to Barre Flow • Weekday Access",
    timestamp: "22 min ago",
    status: "Approved",
  },
  {
    name: "Amira Hassan",
    action: "Early check-in validated for Strength Fundamentals",
    timestamp: "35 min ago",
    status: "Approved",
  },
  {
    name: "Drew Chen",
    action: "Plan renewal reminder sent • 3 classes remaining",
    timestamp: "48 min ago",
    status: "Reminder",
  },
  {
    name: "Sofia Alvarez",
    action: "Weekend-only tier blocked for weekday class",
    timestamp: "1 hr ago",
    status: "Denied",
  },
];

const statusStyles: Record<string, string> = {
  Approved: "bg-emerald-500/15 text-emerald-600",
  Denied: "bg-rose-500/15 text-rose-600",
  Reminder: "bg-amber-500/15 text-amber-600",
};

export function RecentActivity() {
  const recentActivities = activities.slice(0, 6);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Live Check-ins</CardTitle>
        <CardDescription>
          Real-time access validations and member updates
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {recentActivities.map((activity, index) => (
            <div key={index} className="flex items-center">
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  {activity.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {activity.action}
                </p>
              </div>
              <div className="ml-auto flex items-center gap-3 text-sm text-muted-foreground">
                <span
                  className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
                    statusStyles[activity.status]
                  }`}
                >
                  {activity.status}
                </span>
                <span>{activity.timestamp}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
