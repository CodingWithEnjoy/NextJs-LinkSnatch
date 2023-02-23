import { AppHeader } from "@/components/AppHeader";
import { NextSeo } from "next-seo";
import { publicRuntimeConfig } from "next.config";

export default function About() {
  return (
    <>
      <NextSeo
        title={
          "About — " +
          publicRuntimeConfig.app_name +
          " — " +
          publicRuntimeConfig.app_short_description
        }
      />

      <AppHeader />

      <div class="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full mb-10">
        <div class="mt-6 relative max-w-7xl w-full mx-2 py-3 px-4 md:py-0 md:px-6 lg:px-8 xl:mx-auto">
          <h6 class="text-2xl font-bold leading-normal mt-0 mb-2 text-gray-600 dark:text-gray-300">
            About
          </h6>

          <p class="mt-4 text-lg text-slate-700 dark:text-slate-400">
            This is a dead simple bookmarks app that lets you save the links on
            your device on the go.
          </p>

          <p class="mt-4 text-lg text-slate-700 dark:text-slate-400">
            I built{" "}
            <span class="px-2 py-1 dark:text-slate-700 bg-rotate-45 text-md font-bold border-none rounded-md bg-gradient-to-r from-green-200 to-green-200">
              LinkSnatch
            </span>{" "}
            because I wanted something really simple to save links that I wanted
            to read later. I didn't want to have to sign up for an account, I
            didn't want to have to install a browser extension, and I
            (definitely) didn't want to have to use a bookmarking service that
            was going to track me. I wanted something pretty straight-forward
            that just works. And here I am!
          </p>

          <p class="mt-4 text-lg text-slate-700 dark:text-slate-400">
            The app is fairly <i>opinionated</i> and comes with a set of bare
            minimum features I would need:
          </p>

          <ul class="list-disc mt-4 ml-10 text-lg text-slate-700 dark:text-slate-400">
            <li>No signup needed.</li>
            <li>A beautiful interface with minimal distractions.</li>
            <li>
              Extracts URL metadata using{" "}
              <a
                href="https://jsonlink.io/"
                target="_blank"
                class="text-gray-700 dark:text-gray-300 dark:hover:text-purple-200 font-bold hover:text-purple-700"
              >
                jsonlink.io
              </a>{" "}
              and saves it to the browser's local storage.
            </li>
            <li>Save and search links all from a single place.</li>
            <li>Dark mode.</li>
            <li>It doesn't track you.</li>
            <li>
              It's{" "}
              <a
                href="https://github.com/CodingWithEnjoy/NextJs-LinkSnatch"
                target="_blank"
                class="text-gray-700 dark:text-gray-300 dark:hover:text-purple-200 font-bold hover:text-purple-700"
              >
                open source
              </a>
              .
            </li>
          </ul>

          <p class="mt-4 text-lg text-slate-700 dark:text-slate-400">
            I started building it to solve my own itch but later realized that
            someone might be in need of something like this. And so, I decided
            to set it free out in the wild!
          </p>

          <p class="mt-4 text-lg text-slate-700 dark:text-slate-400">
            Crafted with ❤️ by{" "}
            <a
              href="https://github.com/CodingWithEnjoy"
              target="_blank"
              class="text-gray-700 dark:text-gray-300 dark:hover:text-purple-200 font-bold hover:text-purple-700"
            >
              Coding With Enjoy
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
