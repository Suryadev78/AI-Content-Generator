import { Rocket, Zap, Shield, Send } from "lucide-react";
import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { Auth } from "./components/Auth";
import { redirect } from "next/navigation";

export default function LandingPage() {
  const { userId } = auth();
  if (userId) {
    return redirect("/dashboard");
  }
  return (
    <div className="flex flex-col min-h-screen items-center justify-center space-y-4">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between space-x-4 w-full">
        <Link className="flex items-center justify-center" href="#">
          <Rocket className="h-6 w-6 mr-2" />
          <span className="font-bold">StartupX</span>
        </Link>
        <nav className="flex gap-2 sm:gap-6 space-x-1">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            <Auth />
          </Link>
        </nav>
      </header>
      <main className="flex-1 space-y-4">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="justify-center space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Welcome to StartupX -Your Ultimate AI Content Generator
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Revolutionizing the way you work. Our innovative platform
                  helps you achieve more in less time.
                </p>
              </div>
              <div className="space-x-4">
                <button>Get Started</button>
                <button>Learn More</button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-slate-100">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Our Features
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 mx-auto">
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <Zap className="w-12 h-12 text-yellow-500" />
                <h3 className="text-xl font-bold">Lightning Fast</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Our platform is optimized for speed, ensuring you get results
                  quickly.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <Shield className="w-12 h-12 text-green-500" />
                <h3 className="text-xl font-bold">Secure</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center"></p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <Send className="w-12 h-12 text-blue-500" />
                <h3 className="text-xl font-bold">Easy to Use</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Intuitive interface designed for seamless user experience.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Ready to Get Started?
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Join thousands of satisfied users and take your productivity
                  to the next level.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 StartupX Inc. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
