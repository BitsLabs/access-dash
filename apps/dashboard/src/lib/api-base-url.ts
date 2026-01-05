export function getApiBaseUrl(host?: string) {
  if (typeof window !== "undefined") {
    return window.location.origin;
  }

  if (!host || host.includes("localhost")) {
    return "http://localhost:3024";
  }

  const apiBaseUrl =
    process.env.API_BASE_URL ?? process.env.NEXT_PUBLIC_API_BASE_URL;

  if (!apiBaseUrl) {
    throw new Error(
      "Missing API_BASE_URL or NEXT_PUBLIC_API_BASE_URL environment variable.",
    );
  }

  return apiBaseUrl;
}
