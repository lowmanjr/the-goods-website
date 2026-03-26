import { cookies } from "next/headers";
import DashboardClient from "./DashboardClient";

export default async function DashboardPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>;
}) {
  const [cookieStore, params] = await Promise.all([cookies(), searchParams]);
  const initialUnlocked = cookieStore.get("blueprint_unlocked")?.value === "true";
  const sessionId = params.session_id;

  return <DashboardClient initialUnlocked={initialUnlocked} sessionId={sessionId} />;
}
