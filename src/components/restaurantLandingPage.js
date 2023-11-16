import React from 'react';
const RestaurantManagementPage = () => {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div className="bg-gradient-to-r from-red-500 to-orange-600 text-white w-64 flex-shrink-0">
        <div className="p-4">
          <h1 className="text-3xl font-bold text-black">Restaurant Management</h1>
          <p className="mt-2 text-sm text-black">Manage your restaurant with style.</p>
        </div>
        {/* Sidebar Items */}
        <ul className="space-y-4 p-4 text-black">
          <li className="hover:bg-red-600 hover:text-white p-4 rounded transition duration-300 ">
            <a href="#" className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
              Menu
            </a>
          </li>
          <li className="hover:bg-red-600 hover:text-white p-4 rounded transition duration-300">
            <a href="#" className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              Restaurants
            </a>
          </li>
          <li className="hover:bg-red-600 hover:text-white p-4 rounded transition duration-300">
            <a href="#" className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              Placeholder
            </a>
          </li>
          {/* Add more sidebar items as needed */}
        </ul>
      </div>
      {/* Main Content */}
      <div className="flex-1 p-8 bg-white">
        <h2 className="text-4xl font-bold mb-6 text-gray-800">
          <span className="text-red-600">Restaurant</span> Management
        </h2>
        {/* Photo Gallery Section */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <img src="" alt="Gallery 1" className="rounded-lg overflow-hidden" />
          <img src="" alt="Gallery 2" className="rounded-lg overflow-hidden" />
          <img src="" alt="Gallery 3" className="rounded-lg overflow-hidden" />
          {/* Add more gallery images as needed */}
        </div>
        {/* Content Sections */}
        <div className="grid grid-cols-2 gap-8">
          {/* Section 1: Menu Management */}
          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <h3 className="text-2xl font-bold mb-4">Menu Management</h3>
            <p className="text-gray-700 mb-4">Easily organize and update your menu items.</p>
            {/* Add your menu management content here */}
            <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-300">
              Add New Item
            </button>
          </div>
          {/* Section 2: Restaurants Overview */}
          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <h3 className="text-2xl font-bold mb-4">Restaurants Overview</h3>
            <p className="text-gray-700 mb-4">Get insights into your restaurant's performance.</p>
            {/* Add your restaurants overview content here */}
            <button className="bg-yellow-400 text-white px-4 py-2 rounded hover:bg-yellow-500 transition duration-300">
              View Statistics
            </button>
          </div>
        </div>
        {/* Action Buttons Section */}
        <div className="flex space-x-4 mt-8">
          <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-300">
            Add Menu Item
          </button>
          <button className="bg-yellow-400 text-white px-4 py-2 rounded hover:bg-yellow-500 transition duration-300">
            Add Restaurant
          </button>
          {/* Add more buttons as needed */}
        </div>
        {/* Additional Information Section */}
        <div className="mt-8">
          <div className="border-t-2 border-gray-200 pt-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Additional Information</h2>
            <p className="text-gray-700 leading-6">
              Discover the powerful features and customizable options available to streamline the management of your restaurant. From menu organization to detailed statistics, we've got you covered in creating an exceptional dining experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RestaurantManagementPage;