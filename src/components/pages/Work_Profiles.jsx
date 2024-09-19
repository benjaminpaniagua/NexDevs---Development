import '../../index.css'
import { ProfileInfo } from '../work_profiles_components/ProfileInfo'
import { Collection } from '../work_profiles_components/Collection'
import { Categories } from '../work_profiles_components/Categories'
import { Abilities } from '../work_profiles_components/Abilities'

export function Work_Profiles() {
    return (
        <>
            <div className=''>
                {/* Upper Background */}
                <div className="relative w-full h-80 -mt-40">
                    <svg className="h-full w-full fill-clr-blue opacity-20">
                        <defs>
                            <pattern id="backgroundPattern" x="0" y="0" width="160" height="160" patternUnits="userSpaceOnUse" patternTransform="translate(24 55)">
                                <path transform="scale(0.74)" d="m112.4,17.77c-15.09,15.09-21.09,36.54-16.04,57.38,4.09,16.9-.15,34.77-11.4,48.05-1,1.17-2.02,2.28-3.09,3.36-11.14,11.14-26.6,16.98-42.43,15.87-10.69-.75-21.14,3.14-28.66,10.66-14.34,14.35-14.38,37.65-.08,51.95,14.3,14.3,37.58,14.25,51.92-.08,7.53-7.53,11.41-17.97,10.66-28.66-1.11-15.83,4.74-31.3,15.87-42.43,1.07-1.07,2.18-2.1,3.36-3.09,13.31-11.26,31.16-15.48,48.05-11.4,20.85,5.06,42.31-.95,57.4-16.04,23.66-23.66,23.72-62.1.13-85.68s-62.02-23.54-85.68.12h0Z" />
                            </pattern>
                        </defs>
                        <rect x="0" y="0" width="100%" height="100%" fill="url(#backgroundPattern)" />
                    </svg>
                </div>
                {/* Upper Background */}

                {/*Content*/}
                <div className="flex flex-col mx-auto px-20 max-w-[100rem]">

                    {/*1st Half*/}
                    <div className="flex gap-8">
                        {/* Profile */}
                        <div className="w-[40%] flex flex-col">
                            <ProfileInfo />
                        </div>
                        {/* Profile */}
                        <div className="h-auto w-[60%] pl-10 pt-5 flex flex-col">
                            {/* Mi coleccion */}
                            <Collection />
                            {/* Mi coleccion */}
                            <div className="h-auto pt-4 flex">
                                {/* Categories */}
                                <Categories />
                                {/* Categories */}
                                {/* Habilidades */}
                                <Abilities />
                                {/* Habilidades */}
                            </div>
                        </div>
                    </div>
                    {/*1st Half*/}

                    {/* Divisor */}
                    <div className="w-[65%] h-[4px] bg-clr-black mx-auto my-20 rounded-2xl"></div>
                    {/* Divisor */}

                    {/*2nd Half*/}
                    <div className="flex gap-8">
                        {/* Profile */}
                        <div className="w-[40%] flex flex-col">
                            <h1>Holaaa</h1>
                        </div>
                        {/* Profile */}
                        <div className="">
                            <h1>Holaaa</h1>
                        </div>
                    </div>
                    {/*2nd Half*/}

                </div>
                {/*Content*/}

            </div>
        </>
    )
}  