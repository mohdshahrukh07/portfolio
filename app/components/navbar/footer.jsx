// components/Footer.tsx

import Link from "next/link";
import MailIcon from "../icons/mailIcon"
import LinkdinIcon from "../icons/linkdinIcon"
import GithubIcon from "../icons/githubIcon"
import InstaIcon from "../icons/instaIncon"

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 bg-[#eef1f7]">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              Mohd Shahrukh<span className="text-lime-600">.</span>
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-600">
              Frontend Developer passionate about building beautiful,
              responsive and user-friendly web applications with
              Next.js & Tailwind CSS.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-lime-600">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-600">
              <li>
                <Link href="#home" className="hover:text-lime-600">
                  Home
                </Link>
              </li>

              <li>
                <Link href="#about" className="hover:text-lime-600">
                  About
                </Link>
              </li>

              <li>
                <Link href="#projects" className="hover:text-lime-600">
                  Projects
                </Link>
              </li>

              <li>
                <Link href="#contact" className="hover:text-lime-600">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-lime-600">
              Services
            </h3>

            <ul className="space-y-3 text-gray-600">
              <li>Web Development</li>
              <li>Backend Development</li>
              <li>UI Development</li>
              <li>Responsive Design</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-lime-600">
              Connect
            </h3>

            <p className="mb-5 text-sm text-gray-600">
              Let's build something amazing together.
            </p>

            <div className="flex gap-3">
              <a
                href="https://github.com/mohdshahrukh07"
                className="rounded-full border p-3 transition bg-lime-600 hover:text-white"
              >
                <GithubIcon />
              </a>

              <a
                href="https://www.linkedin.com/in/mohd-shahrukh-sam "
                className="rounded-full border p-3 transition bg-lime-600 hover:text-white"
              >
                <LinkdinIcon  />
              </a>

              <a
                href="#"
                className="rounded-full border p-3 transition bg-lime-600 hover:text-white"
              >
                <InstaIcon />
              </a>

              <a
                href="mailto:mohd800021@gmail.com"
                className="rounded-full border p-3 transition bg-lime-600 hover:text-white"
              >
                <MailIcon />
              </a>
            </div>
          </div>

        </div>

        <div className="mt-12 border-t pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Mohd Shahrukh. All rights reserved.
        </div>
      </div>
    </footer>
  );
}