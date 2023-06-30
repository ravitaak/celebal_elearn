const Home = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex  md:flex-row flex-col items-center">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <img className="object-cover object-center rounded" alt="hero" src="https://codedrink.org/static/media/home-main.541f8179af8209ce03ccf2178fe62dbf.svg" />
                </div>
                <div
                    className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                        Learn How to Code
                        <br className="hidden lg:inline-block" />
                    </h1>
                    <p className="mb-8 leading-relaxed">New to coding? Start here and learn programming fundamentals that can be helpful for any language you learn.</p>
                    <h6 className="title-font sm:text-2xl mb-4 font-medium text-gray-900">
                        About this course
                        <br className="hidden lg:inline-block" />
                    </h6>
                    <p className="mb-8 leading-relaxed">
                        Programming is all around us, from the take-out we order to the movies we stream. Whether you’re about to start your journey as a developer or just want to increase your digital literacy, knowing the basics of coding will be beneficial to your career. Instead of teaching a specific programming language, this course teaches programming fundamentals that can be helpful for any language you learn.</p>





                    <div className="flex justify-center">
                        <button
                            className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Start Learning Now
                        </button>

                    </div>
                </div>
            </div>
            <div className="container mx-auto flex md:flex-row mb-40 flex-col items-center">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <img className="object-cover object-center rounded" alt="hero" src="https://images.ctfassets.net/go6kr6r0ykrq/2uzW2mf467i5qpTn76Hg0T/10aa7df78e09edab69e44a80adf0a796/le-review-mobile.gif" />
                </div>
                <div
                    className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                        The platform
                        Hands-on learning
                        <br className="hidden lg:inline-block" />
                    </h1>
                    <p className="mb-8 leading-relaxed">Don’t just watch or read about someone else coding — write your own code live in our online, interactive platform. You’ll even get AI-driven recommendations on what you need to review to help keep you on track.</p>


                </div>
            </div>
            <div className="container flex md:flex-row mb-40 p-10 flex-col items-center bg-amber-400">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <img className="object-cover object-center rounded" alt="hero" src="https://images.ctfassets.net/go6kr6r0ykrq/281DR2hv173vwI9muNRQra/e4f2a5e5772bb3b0679f5d0e9b8159b3/ReinforcementIllustration.svg" />
                </div>
                <div
                    className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                        Join over 50 million learners and start Learn How to Code today!
                        <br className="hidden lg:inline-block" />
                    </h1>
                    <div className="flex justify-center">
                        <button
                            className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Start
                        </button>


                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home