import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <Link href="/">
            <a className="inline-flex items-center">
              <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                andresdavidsv
              </span>
            </a>
          </Link>
          <div className="mt-6 lg:max-w-sm">
            <p className="text-sm text-gray-800">
              Hi there, I´m Andrés David | @andresdavidsv 👋
            </p>
            <p className="mt-4 text-sm text-gray-800">
              Im a Father, Electronic Engineer, and Software Engineer!
            </p>
          </div>
        </div>
        <div className="space-y-2 text-sm">
          <p className="text-base font-bold tracking-wide text-gray-900">
            Contacts
          </p>
          <div className="flex">
            <p className="mr-1 text-gray-800">Phone:</p>
            <Link href="tel:+573043738746">
              <a className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800">
                +573043738746
              </a>
            </Link>
          </div>
          <div className="flex">
            <p className="mr-1 text-gray-800">Email:</p>
            <Link href="mailto:soy@andresdavidsv.com">
              <a className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800">
                soy@andresdavidsv.com
              </a>
            </Link>
          </div>
        </div>
        <div>
          <span className="text-base font-bold tracking-wide text-gray-900">
            Social
          </span>
          <div className="flex items-center mt-1 space-x-3">
            <Link href="https://github.com/andresdavidsv/" passHref>
              <a
                className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </Link>
            <Link href="https://co.linkedin.com/in/andresdavidsv" passHref>
              <a
                className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </Link>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            You can contact me at the data left here.
          </p>
        </div>
      </div>
      <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
        <p className="text-sm text-gray-600">
          © Copyright 2021. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
