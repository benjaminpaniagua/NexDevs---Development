import '../../index.css'
import { Community_Search } from '../community_feed_components/Community_Search.jsx'
import { Featured_Profiles } from '../community_feed_components/Featured_Profiles.jsx'
import { Main_Categories } from '../community_feed_components/Main_Categories.jsx'
import { Community_Posts } from '../community_feed_components/Community_Posts.jsx'
import { useState } from 'react';
import { Loading_Screen } from '../ui/Loading_Screen.jsx'

export function Community_Feed() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <div className="flex flex-col gap-12 py-10 h-auto mx-auto px-20 max-w-[100rem] xs:px-7 md:px-10">

        {/* Loading Screen */}
        <Loading_Screen Loading={isLoading} />
        {/* Loading Screen */}

        {/* Community Search */}
        <div className='h-auto '>
          <Community_Search />
        </div>
        {/* Community Search */}

        {/* Featured Profiles */}
        <div className='h-auto '>
          <Featured_Profiles setIsLoading={setIsLoading} />
        </div>
        {/* Featured Profiles */}

        {/* Main_Categories */}
        <div className='h-auto'>
          <Main_Categories />
        </div>
        {/* Main_Categories */}

        {/* Community Posts */}
        <div className='h-auto'>
          <Community_Posts />
        </div>
        {/* Community Posts */}
      </div>
    </>
  )
}  