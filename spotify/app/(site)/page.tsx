import { Header } from "@/components/Header";

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

export default function Home() {
    return (
      <div className="bg-neutral-900 rounded-lg h-full overflow-hidden overflow-y-auto">
        <Header/>
      </div>
    );
  }