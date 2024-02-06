import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="h-screen w-full bg-neutral-950 flex items-center justify-center flex-col gap-10">
      <h1 className="text-6xl font-medium ">Escolha suas saidas</h1>
      <div className="flex gap-[10px] items-center justify-center">
        <Button className="px-10">
            <a href="/dashboard">dashboard</a>
        </Button>
        <a href="/cadastro" className="bg-none transition-all hover:text-purple-700">Cadastro</a>
      </div>
    </main>
  );
}
