import React from 'react'

const Contact = () => {
  return (
    <div>
      <section className="text-white body-font relative">
  <div className="container px-5 py-2 mx-auto" id='contact'>
    <div className="flex flex-col text-center  w-full mb-9">
      <h1 className="sm:text-3xl text-4xl font-bold underline mt-5 italic title-font mb-3 text-white">
        Contact Me
      </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed sm:text-1xl  text-4xl underline">
        Feel Free To Contact Us!
      </p>
    </div>
    <div className="lg:w-1/2 md:w-1/3 mx-auto">
      <div className="flex flex-wrap "data-aos="fade-down-right">
        <div className=" w-full ">
          <div className="relative">
            <label htmlFor="name" className="leading-7 text-2xl text-white">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className=" w-full bg-opacity-50 rounded border border-white bg-white text-white bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 focus:border-purple-100 focus:bg-purple-100 focus:ring-2 focus:ring-purple-200 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 w-full mt-5" >
          <div className="relative">
            <label htmlFor="email" className="leading-7 text-2xl text-white">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-opacity-50 rounded border border-white bg-white  bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 focus:border-purple-100 focus:bg-purple-100 focus:ring-2 focus:ring-purple-200 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
        <div className="p-2 w-full mt-5">
          <div className="relative">
            <label
              htmlFor="message"
              className="leading-7 text-2xl text-white"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-opacity-50 rounded border border-white bg-white  bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 focus:border-purple-100 focus:bg-purple-100 focus:ring-2 focus:ring-purple-200 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              defaultValue={""}
            />
          </div>
        </div>
        <div className="p-2 w-full">
          <button className="flex mx-auto text-purple-900 bg-white border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg">
            Send Message
          </button>
        </div>

      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Contact
