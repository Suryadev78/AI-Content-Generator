import Sidebar from "./components/Sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="bg-slate-100 h-screen">
      <div className="md:w-64  hidden md:block fixed">
        <Sidebar />
      </div>
      <div className="md:ml-64 bg-slate-50 h-fit">{children}</div>
    </div>
  );
}
