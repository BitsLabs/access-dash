export function getApiBaseUrl(host?: string) {
  if (typeof window !== "undefined") {
    const hostname = window.location.hostname;
    if (hostname === "localhost" || hostname === "127.0.0.1") {
      return window.location.origin;
    }

    return (
      process.env.NEXT_PUBLIC_API_BASE_URL ??
      "https://saas-microservices-dashboard.vercel.app"
    );
  }

  if (!host || host.includes("localhost")) {
    return "http://localhost:3024";
  }

  return (
    process.env.API_BASE_URL ??
    process.env.NEXT_PUBLIC_API_BASE_URL ??
    "https://saas-microservices-dashboard.vercel.app"
  );
}
