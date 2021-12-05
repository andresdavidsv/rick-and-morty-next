import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Search from '@components/SearchComponent/Search';

const Navbar = () => {
  const router = useRouter();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [name, setName] = useState('');
  const handleName = (name) => {
    setName(name);
    router.push({
      pathname: '/',
      query: { name },
    });
  };
  return (
    <div className="bg-gray-900">
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          <Link href="/">
            <a className="inline-flex items-center">
              <span className="ml-2 text-sm font-bold tracking-wide text-gray-100 uppercase">
                andresdavidsv
              </span>
            </a>
          </Link>
          <div className="hidden md:block">
            <Search handleName={handleName} />
          </div>
          <ul className="flex items-center space-x-8 lg:flex">
            <li>
              <Link href="/">
                <a className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400">
                  Home
                </a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400">
                  About
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
