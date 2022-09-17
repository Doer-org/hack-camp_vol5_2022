
export const Footer = () => {
  return (
        <footer className="mt-32 bg-thick-purple
                            text-white"
                key="footer">
            <div>
                <div className="container mx-auto flex flex-col
                                items-center px-5
                                py-6 sm:flex-row">
                    <a className="flex
                                items-center justify-center
                                font-medium md:justify-start">
                        <span className="title ml-3 text-xl
                                        font-semibold text-white">
                                        MEET HACK
                        </span>
                    </a>

                    <p className="mt-4 text-sm
                                sm:ml-6 sm:mt-0 ">
                                2022 Do'er —
                        <a
                        href="https://doer.vercel.app/"
                        rel="doo'er_homepage noreferrer"
                        className="ml-1 "
                        target="_blank">
                                @HomePage
                        </a>
                    </p>

                    <span className="mt-4
                                    inline-flex justify-center
                                    sm:ml-auto
                                    sm:mt-0 sm:justify-start">
                        <a className="ml-3 "
                                href="https://mobile.twitter.com/du_doer"
                                target="_blank" rel="noreferrer">
                            <svg fill="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                className="h-5 w-5"
                                viewBox="0 0 24 24">
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48
                                        0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5
                                        13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5
                                        4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                            </svg>
                        </a>
                    </span>
                </div>
            </div>
        </footer>
  )
}
