import {
  ClerkProvider,
  OrganizationSwitcher,
  SignedIn,
  UserButton,
} from "@clerk/nextjs";
import "./globals.css";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { Docs, Github, Times } from "./icons";
import { Twitter } from "./icons";
import { Discord } from "./icons";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next.js Clerk Starter",
  description:
    "This is a starter project for building a Next.js app with Clerk.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        variables: { colorPrimary: "#000000" },
        elements: {
          formButtonPrimary:
            "bg-black border border-black border-solid hover:bg-white hover:text-black",
          socialButtonsBlockButton:
            "bg-white border-gray-200 hover:bg-transparent hover:border-black text-gray-600 hover:text-black",
          socialButtonsBlockButtonText: "font-semibold",
          formButtonReset:
            "bg-white border border-solid border-gray-200 hover:bg-transparent hover:border-black text-gray-500 hover:text-black",
          membersPageInviteButton:
            "bg-black border border-black border-solid hover:bg-white hover:text-black",
          card: "bg-[#fafafa]",
        },
      }}
    >
      <html lang="en">
        <body className={`${inter.className} min-h-screen flex flex-col`}>
          <header className="flex h-20 px-4 sm:px-8 gap-4 items-center border-b border-solid border-black border-opacity-20">
            <Link href="/" className="flex h-20 gap-2 sm:gap-4 items-center">
              <Image
                src="/clerk.svg"
                alt="Clerk Logo"
                width={102}
                height={32}
                priority
              />
              <Times />
              <Image
                src="/next.svg"
                alt="Next.js Logo"
                width={90}
                height={18}
                priority
              />
            </Link>
            <div className="grow" />
            <SignedIn>
              <div className="sm:block hidden">
                <OrganizationSwitcher afterCreateOrganizationUrl="/dashboard" />
              </div>
              <div className="sm:hidden block">
                <OrganizationSwitcher
                  afterCreateOrganizationUrl="/dashboard"
                  appearance={{
                    elements: {
                      organizationSwitcherTriggerIcon: `hidden`,
                      organizationPreviewTextContainer: `hidden`,
                      organizationSwitcherTrigger: `pr-0`,
                    },
                  }}
                />
              </div>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </header>
          <main className="grow">{children}</main>
          <footer className="h-20 flex gap-1 px-8 md:px-20 items-center font-medium border-t">
            <Image
              src="/clerk.svg"
              alt="Clerk Logo"
              width={64}
              height={32}
              priority
            />
            <span className="text-sm">© 2023</span>
            <nav className="grow flex sm:gap-2 justify-end">
              <a
                className="px-3 py-2 rounded-md text-gray-600 flex gap-2 font-semibold text-sm hover:text-gray-800 transition duration-100"
                href="https://clerk.com/docs"
              >
                <div className="m-auto">
                  <Docs />
                </div>
                <span className="hidden sm:inline"> Visit Clerk Docs</span>
                <span className="sm:hidden inline"> Docs</span>
              </a>
              <a
                className="px-3 py-2 rounded-md text-gray-600 flex gap-2 font-semibold text-sm hover:text-gray-800 transition duration-100"
                href="https://github.com/devagrawal09/clerk-nextjs-template"
              >
                <div className="m-auto">
                  <Github />
                </div>
                <span className="hidden sm:inline"> View on Github</span>
              </a>
              <a
                className="p-2 hover:underline flex flex-col justify-center"
                href="https://twitter.com/ClerkDev"
              >
                <Twitter />
              </a>
              <a
                className="p-2 hover:underline flex flex-col justify-center"
                href="https://discord.com/invite/b5rXHjAg7A"
              >
                <Discord />
              </a>
            </nav>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
