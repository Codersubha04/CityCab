import React from 'react'

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 flex flex-col items-center justify-center p-4">
      {/* Main hero section with Figma design */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        {/* Main container matching Figma frame specifications */}
        <div 
          className="bg-gray-700 rounded-3xl border-4 border-gray-600 p-8 mb-8 inline-block shadow-2xl transform hover:scale-105 transition-transform duration-300"
          style={{
            backgroundColor: 'rgb(38, 38, 38)', // Color from Figma: r: 0.15, g: 0.15, b: 0.15
            borderColor: 'rgb(51, 51, 51)', // Border color from Figma: r: 0.2, g: 0.2, b: 0.2
            borderRadius: '30px', // Corner radius from Figma: 29.83519744873047
            minWidth: '400px',
            minHeight: '200px'
          }}
        >
          {/* Home Page text matching Figma specifications */}
          <h1 
            className="text-white font-bold mb-4"
            style={{
              fontSize: '4rem', // Adjusted for responsive design
              color: 'rgb(255, 255, 255)' // White color from Figma
            }}
          >
            Home Page
          </h1>
        </div>

        {/* Welcome section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Welcome to Our Platform
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience the future of digital solutions with our modern, responsive design 
            built with React and Tailwind CSS.
          </p>
        </div>
      </div>

      {/* Feature cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Fast Performance</h3>
          <p className="text-gray-600">
            Lightning-fast loading times and smooth interactions powered by modern React.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">User Friendly</h3>
          <p className="text-gray-600">
            Intuitive design that puts user experience at the forefront of everything we do.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Secure & Reliable</h3>
          <p className="text-gray-600">
            Built with security best practices and reliable architecture you can trust.
          </p>
        </div>
      </div>

      {/* Call to action */}
      <div className="text-center">
        <button className="bg-gray-800 hover:bg-gray-900 text-white font-semibold py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
          Get Started
        </button>
      </div>

      {/* Footer */}
      <footer className="mt-16 text-center text-gray-500">
        <p>&copy; 2024 Your Company. Built with React & Tailwind CSS.</p>
      </footer>
    </div>
  )
}

export default Home