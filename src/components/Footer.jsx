import React from 'react'

function Footer() {
  return (
    <>
       <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-sm">&copy; Paithrika. All rights reserved.</p>
        <div className="flex space-x-6 mt-3 sm:mt-0">
          <a href="#" className="hover:text-gray-400 transition">Facebook</a>
          <a href="#" className="hover:text-gray-400 transition">Instagram</a>
          <a href="#" className="hover:text-gray-400 transition">Twitter</a>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer
