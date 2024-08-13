import Tooltip from "../components/Tooltip"
import images from "../data/images.json"

const GoWebSocket = () => {
  const languages = ["TypeScript", "Vite", "Npm", "Go"]

  const filteredImages = images.filter((img) =>
    languages.includes(img.imageName)
  )

  return (
    <div className="flex justify-center w-full">
      <div className="w-full max-w-screen-md overflow-x-visible overflow-y-auto">
        <h1 className="mt-4 text-3xl font-bold tracking-tight lg:mt-0 lg:text-5xl text-zinc-950 dark:text-zinc-50">
          Learning go with websockets
        </h1>
        <div className="flex items-center gap-4 mt-4">
          {filteredImages.map((img) => (
            <Tooltip label={img.imageName} position="bottom">
              <img src={img.url} alt={img.imageName} className="size-6" />
            </Tooltip>
          ))}
        </div>
        <article className="mt-4 text-zinc-950 dark:text-zinc-50">
          Have you ever wondered why we yawn? Yawning is actually our body's way
          of getting more oxygen. When we are tired or bored our brain sends a
          signal to take in a deep breath to wake us up. As we yawn our muscles
          stretch and our heart rate increases helping us feel more alert. So
          next time you catch yourself yawning remember that your body is just
          trying to give you a little energy boost!
        </article>
        <article className="mt-4 text-zinc-950 dark:text-zinc-50">
          Have you ever wondered why we yawn? Yawning is actually our body's way
          of getting more oxygen. When we are tired or bored our brain sends a
          signal to take in a deep breath to wake us up. As we yawn our muscles
          stretch and our heart rate increases helping us feel more alert. So
          next time you catch yourself yawning remember that your body is just
          trying to give you a little energy boost!
        </article>
        <article className="mt-4 text-zinc-950 dark:text-zinc-50">
          Have you ever wondered why we yawn? Yawning is actually our body's way
          of getting more oxygen. When we are tired or bored our brain sends a
          signal to take in a deep breath to wake us up. As we yawn our muscles
          stretch and our heart rate increases helping us feel more alert. So
          next time you catch yourself yawning remember that your body is just
          trying to give you a little energy boost!
        </article>
        <article className="mt-4 text-zinc-950 dark:text-zinc-50">
          Have you ever wondered why we yawn? Yawning is actually our body's way
          of getting more oxygen. When we are tired or bored our brain sends a
          signal to take in a deep breath to wake us up. As we yawn our muscles
          stretch and our heart rate increases helping us feel more alert. So
          next time you catch yourself yawning remember that your body is just
          trying to give you a little energy boost!
        </article>
        <article className="mt-4 text-zinc-950 dark:text-zinc-50">
          Have you ever wondered why we yawn? Yawning is actually our body's way
          of getting more oxygen. When we are tired or bored our brain sends a
          signal to take in a deep breath to wake us up. As we yawn our muscles
          stretch and our heart rate increases helping us feel more alert. So
          next time you catch yourself yawning remember that your body is just
          trying to give you a little energy boost!
        </article>
        <article className="mt-4 text-zinc-950 dark:text-zinc-50">
          Have you ever wondered why we yawn? Yawning is actually our body's way
          of getting more oxygen. When we are tired or bored our brain sends a
          signal to take in a deep breath to wake us up. As we yawn our muscles
          stretch and our heart rate increases helping us feel more alert. So
          next time you catch yourself yawning remember that your body is just
          trying to give you a little energy boost!
        </article>
        <article className="mt-4 text-zinc-950 dark:text-zinc-50">
          Have you ever wondered why we yawn? Yawning is actually our body's way
          of getting more oxygen. When we are tired or bored our brain sends a
          signal to take in a deep breath to wake us up. As we yawn our muscles
          stretch and our heart rate increases helping us feel more alert. So
          next time you catch yourself yawning remember that your body is just
          trying to give you a little energy boost!
        </article>
        <article className="mt-4 text-zinc-950 dark:text-zinc-50">
          Have you ever wondered why we yawn? Yawning is actually our body's way
          of getting more oxygen. When we are tired or bored our brain sends a
          signal to take in a deep breath to wake us up. As we yawn our muscles
          stretch and our heart rate increases helping us feel more alert. So
          next time you catch yourself yawning remember that your body is just
          trying to give you a little energy boost!
        </article>
        <article className="mt-4 text-zinc-950 dark:text-zinc-50">
          Have you ever wondered why we yawn? Yawning is actually our body's way
          of getting more oxygen. When we are tired or bored our brain sends a
          signal to take in a deep breath to wake us up. As we yawn our muscles
          stretch and our heart rate increases helping us feel more alert. So
          next time you catch yourself yawning remember that your body is just
          trying to give you a little energy boost!
        </article>
      </div>
    </div>
  )
}

export default GoWebSocket
