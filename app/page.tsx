import Image from "next/image";
import Link from "next/link";
import componentsImg from "./assets/components.svg";
import { DownArrow, RightArrow } from "./icons";
import "./home.css";

export default function Home() {
  return (
    <main className="">
      <article className="grid lg:grid-cols-2">
        <div className="px-8 md:px-20 py-20 lg:py-48">
          <h1 className="text-5xl md:text-6xl gradient text-transparent font-semibold">
            Auth starts here.
          </h1>
          <p className="mt-2 text-lg">
            A simple and powerful Next.js template featuring authentication and
            user management powered by Clerk.
          </p>
          <div className="mt-8 flex gap-2">
            <Link
              href="/dashboard"
              className="py-2 px-4 bg-primary-600 text-white rounded-lg flex content-center gap-2 transition-colors duration-200 hover:bg-primary-700 font-semibold"
            >
              View Demo
              <div className="m-auto">
                <RightArrow />
              </div>
            </Link>
            <a
              className="py-2 px-4 flex gap-2 rounded-lg transition duration-100 font-semibold text-gray-600 hover:text-gray-800"
              href="#features"
            >
              Learn more
              <div className="m-auto">
                <DownArrow />
              </div>
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <Image src={componentsImg} alt="Clerk embeddable components" />
        </div>
      </article>
      <article
        className="bg-opacity-5 bg-black px-8 md:px-20 py-12 md:py-24"
        id="features"
      >
        <h2 className="text-3xl font-semibold">What's under the hood?</h2>
        <p className="mt-2">
          This template repo uses some of the following features supported by
          Clerk. To learn more, read the{" "}
          <a
            href="https://clerk.com/docs"
            className="text-primary-600 hover:underline font-medium"
          >
            documentation
          </a>
          .
        </p>
        <div className="grid lg:grid-cols-3 mt-8 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg flex flex-col gap-1 h-56">
            <h3 className="text-lg font-medium">
              Embedded Components with Customization
            </h3>
            <p className="text-gray-700">
              Make Clerk's drop-in UI components your own with extensive
              customization options.
            </p>
            <div className="grow"></div>
            <a
              href="https://clerk.com/docs/component-reference/customization"
              className="text-primary-600 cta hover:underline"
              target="_blank"
            >
              Customization documentation <span className="arrow">-&gt;</span>
            </a>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg flex flex-col gap-1 h-56">
            <h3 className="text-lg font-medium">Built-in React Hooks</h3>
            <p className="text-gray-700">
              Building a custom auth flow? Clerk's hooks give all the
              functionality you need.
            </p>
            <div className="grow"></div>
            <a
              href="https://clerk.com/docs/reference/clerk-react/useuser"
              className="text-primary-600 cta hover:underline"
              target="_blank"
            >
              Hooks documentation <span className="arrow">-&gt;</span>
            </a>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg flex flex-col gap-1 h-56">
            <h3 className="text-lg font-medium">Organizations</h3>
            <p className="text-gray-700">
              Quickly add collaboration and multi-tenancy capabilities with
              Clerk's components.
            </p>
            <div className="grow"></div>
            <a
              href="https://clerk.com/docs/organizations/overview"
              className="text-primary-600 cta hover:underline"
              target="_blank"
            >
              Organizations documentation <span className="arrow">-&gt;</span>
            </a>
          </div>
        </div>
      </article>
    </main>
  );
}
