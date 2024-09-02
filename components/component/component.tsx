import Image from 'next/image'
import ProfileImage from './ProfileImage'

export default function Component() {
  return (
    <div className="relative flex flex-col items-center w-full min-h-screen p-4">
      <div 
        className="absolute inset-0 bg-pink-100 before:content-[''] before:absolute before:inset-0 before:bg-white before:opacity-70"
        style={{ 
          backgroundImage: "url('/StrawberrySophBG.png')", 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="relative z-10">
        <header className="flex flex-col items-center mb-8">
          <ProfileImage />
          <h1 className="mt-4 text-4xl font-bold text-gray-300"
              style={{ textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000' }}>
            StrawberrySoph
          </h1>
        </header>
        <main className="flex flex-col items-center w-full max-w-md space-y-8">
          <section className="w-full">
            <h2 className="mb-4 text-3xl font-semibold text-center text-gray-300"
                style={{ textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000' }}>
              Socials
            </h2>
            <a
              href="https://www.instagram.com/strawberryssoph"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full px-4 py-2 mb-2 text-lg font-semibold text-center text-white bg-[#d02f2f] rounded-lg hover:scale-105 transition-transform"
            >
              Instagram <InstagramIcon className="inline w-5 h-5 ml-2" />
            </a>
            <a
              href="https://x.com/sophonsol"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full px-4 py-2 mb-2 text-lg font-semibold text-center text-white bg-[#d02f2f] rounded-lg hover:scale-105 transition-transform"
            >
              Twitter <TwitterIcon className="inline w-5 h-5 ml-2" />
            </a>
            <a
              href="https://www.tiktok.com/@sophia_celeste28"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full px-4 py-2 mb-2 text-lg font-semibold text-center text-white bg-[#d02f2f] rounded-lg hover:scale-105 transition-transform"
            >
              TikTok <InstagramIcon className="inline w-5 h-5 ml-2" />
            </a>
          </section>
          <div className="w-full">
            <a
              href="mailto:sophia@strawberrysoph.com"
              className="block w-full px-4 py-2 mb-2 text-lg font-semibold text-center text-white bg-[#d02f2f] rounded-lg hover:scale-105 transition-transform"
            >
              Contact
            </a>
          </div>
        </main>
      </div>
    </div>
  )
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}