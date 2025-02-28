import Tooltip from '../components/Tooltip'
import images from '../data/images.json'

const RuneRank = () => {
  const languages = [
    'NextJs',
    'TypeScript',
    'TailwindCSS',
    'Cloudflare',
    'Vercel',
    'Supabase'
  ]

  const filteredImages = images.filter((img) =>
    languages.includes(img.imageName)
  )

  return (
    <div className='flex justify-center w-full'>
      <div className='w-full max-w-screen-md overflow-x-visible overflow-y-auto'>
        <h1 className='mt-4 text-3xl font-bold tracking-tight lg:mt-0 lg:text-5xl text-zinc-950 dark:text-zinc-50'>
          Rune Rank
        </h1>
        <div className='flex items-center gap-4 mt-4'>
          {filteredImages.map((img) => (
            <Tooltip label={img.imageName} position='bottom'>
              <img src={img.url} alt={img.imageName} className='size-6' />
            </Tooltip>
          ))}
        </div>
        <article className='mt-4 text-zinc-950 dark:text-zinc-50'>
          I built Rune Rank because of competitors being behind in tech and
          never implementing newer ideas. Rune Rank is a modern concept of older
          leaderboards in the nich community of runescape private servers. I
          came up with the idea to gamified a simple voting system that rewards
          users for voting in streaks and to show off their badges.
          <br />
          <br />
          The next big thing was the leaderboard. The leaderboard is where most
          people in the small community look to join newer communities and the
          competitors websites made it so new or smaller communities would never
          stand out. So with the current implementation of the leaderboard on
          Rune Rank it will reset monthly allowing new up and coming communities
          to grow a bit more and having tags that are given to trending, hot, or
          new servers to show they are gaining popularity.
          <br />
          <br />
          Tackling the biggest problem in the community is having a leaderboard
          that is being botted or allowing users to use vpns. So with Rune Rank
          I made it so you have to create an account to contribute to the
          leaderboard process. We also log every vote by ip address with user
          account to make sure they cannot vote again within the time limit.
          These simple fixes made the leaderboards more fair and allows real
          communties to shine.
          <br />
          <br />
          The newest features include giving the communities blogs to update
          users that follow or vote for their community on the leaderboard. This
          allows the communities to show off their recent content updates or
          even events. I also added analytics for communities to see geo
          location for their users base, if they're voting on desktop or mobile,
          time based analytics and even blog page views.
          <br />
          <br />
          <p className='text-sm text-zinc-500'> Last updated: 2/28/2025</p>
        </article>
      </div>
    </div>
  )
}

export default RuneRank
