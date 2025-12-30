import { redirect } from "next/navigation";

export default function Home() {
  const link = "/homepage";
  return redirect(link);
}
