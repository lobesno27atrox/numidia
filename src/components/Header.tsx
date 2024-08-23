import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { useDarkMode } from "../store/theme";
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from "react-router-dom";
import { useAuthStore } from "../store/auth";


const Header = () => {

  const { toggleDarkMode, darkMode } = useDarkMode();
  const { isAuth } = useAuthStore()

  return (
    <Disclosure as="nav" className="bg-numid-orange">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">

                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-black hover:text-gray-900 dark:text-slate-200 dark:hover:text-slate-50">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">

                  <img
                    className="hidden h-8 w-auto lg:block"
                    src="https://numidimg.s3.us-east-2.amazonaws.com/logo.png"
                    alt="Logo"
                  />
                </div>

                <div className="hidden sm:ml-6 sm:block">

                  <div className="flex space-x-4">

                    {isAuth ? (
                      <>
                        <Link
                          to={'/Inicio'}
                          className='text-black p-2 px-4 rounded-lg hover:bg-numid-blue-2 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white'
                        >
                          home
                        </Link>

                        {/* <Link
                          to={'/cate'}
                          className='text-black p-2 px-4 rounded-lg hover:bg-numid-blue-2 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white'
                        >
                          Categories
                        </Link> */}
                      </>

                    ) : (
                      <>

                        <Link
                          to={'/home'}
                          className='text-white p-2 px-4 rounded-lg hover:bg-numid-blue-1 dark:text-gray-300 dark:hover:bg-numid-blue-2 dark:hover:text-white'
                        >
                          Eventos
                        </Link>

                        {/* <Link
                          to={'/traininghome'}
                          className='text-white p-2 px-4 rounded-lg hover:bg-numid-blue-1 dark:text-gray-300 dark:hover:bg-numid-blue-2 dark:hover:text-white'
                        >
                          Training
                        </Link> 

                        <Link
                          to={'/boosthome'}
                          className='text-white p-2 px-4 rounded-lg hover:bg-numid-blue-1 dark:text-gray-300 dark:hover:bg-numid-blue-2 dark:hover:text-white'
                        >
                          Boost
                        </Link>

                        <Link
                          to={'/connecthome'}
                          className='text-white p-2 px-4 rounded-lg hover:bg-numid-blue-1 dark:text-gray-300 dark:hover:bg-numid-blue-2 dark:hover:text-white'
                        >
                          Connect
                        </Link>*/}

                      </>
                    )}

                  </div>
                </div>
              </div>

              <div className="absolute space-x-2 inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  onClick={toggleDarkMode}
                  type="button"
                >
                  {darkMode ?

                    <BsFillMoonStarsFill size={20} className="text-slate-200 hover:text-white " />

                    :

                    <BsFillSunFill size={23} className="text-slate-900 hover:text-black" />}

                </button>

              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">

            <div className="space-y-1 px-2 pb-3 pt-2">
            </div>

          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default Header