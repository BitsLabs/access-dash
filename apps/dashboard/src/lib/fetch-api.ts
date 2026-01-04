import { cookies, headers } from "next/headers";
import { getApiBaseUrl } from "./api-base-url";

export async function fetchApi<T>(path: string): Promise<T> {
  const reqHeaders = await headers();
  const host = reqHeaders.get("host");
  const cookieStore = await cookies();
  const apiBaseUrl = getApiBaseUrl(host ?? undefined);
  const response = await fetch(
    `${apiBaseUrl}${path}`,
    {
      headers: {
        Cookie: `saas_microservices_authed_user=${
          cookieStore.get("saas_microservices_authed_user")?.value
        }`,
      },
    }
  );
  return response.json() as Promise<T>;
}
