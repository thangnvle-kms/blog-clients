import { Popover } from '@headlessui/react'

import SearchComponent from '../search/SearchComponent'
import NavbarRightComponent from '../menu/NavbarRightComponent'

const NavbarComponent = () => {
    return (
        <div>
            <Popover className="relative bg-white">
                <div className="mx-auto px-4 sm:px-6">
                    <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
                        <div className="flex justify-start lg:w-0 lg:flex-1">
                            <a href="/#">
                                <img
                                    className="h-8 w-auto sm:h-10"
                                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                    alt=""
                                />
                            </a>
                        </div>
                       <SearchComponent />
                        <NavbarRightComponent />
                    </div>
                </div>
            </Popover>
        </div>
    )
}

export default NavbarComponent