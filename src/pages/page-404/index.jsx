import { ErrorPage } from "@/components/pages/404";

export default function Home() {
  return (
    <div className="flex flex-col h-screen gap-[100px]">
      <ErrorPage />
    </div>
  );
}
