import React from 'react';

const Components = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <h1 className="text-3xl font-bold mb-8 border-b-4 border-black pb-2">Component Library</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Buttons Section */}
        <div className="bg-white p-6 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <h2 className="text-xl font-bold mb-4 border-b-2 border-black pb-1">Buttons</h2>
          <div className="space-y-4">
            <button className="px-4 py-2 bg-blue-500 text-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Primary</button>
            <button className="px-4 py-2 bg-transparent text-blue-500 border-2 border-blue-500 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Secondary</button>
            <button className="px-4 py-2 bg-red-500 text-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">Destructive</button>
            <button className="px-4 py-2 bg-transparent text-gray-700 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">Ghost</button>
            <button className="px-6 py-3 bg-blue-500 text-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Large</button>
          </div>
        </div>

        {/* Badges Section */}
        <div className="bg-white p-6 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <h2 className="text-xl font-bold mb-4 border-b-2 border-black pb-1">Badges</h2>
          <div className="space-y-4">
            <span className="inline-block px-3 py-1 bg-green-100 text-green-800 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">Success</span>
            <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">Warning</span>
            <span className="inline-block px-3 py-1 bg-red-100 text-red-800 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">Error</span>
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">Info</span>
            <span className="inline-block px-3 py-1 bg-gray-100 text-gray-800 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-full">Pill</span>
          </div>
        </div>

        {/* Inputs Section */}
        <div className="bg-white p-6 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <h2 className="text-xl font-bold mb-4 border-b-2 border-black pb-1">Inputs</h2>
          <div className="space-y-4">
            <input type="text" placeholder="Text Input" className="w-full px-3 py-2 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <textarea placeholder="Textarea" className="w-full px-3 py-2 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:outline-none focus:ring-2 focus:ring-blue-500" rows="3"></textarea>
            <select className="w-full px-3 py-2 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="checkbox" className="h-4 w-4 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] focus:ring-blue-500" />
              <label htmlFor="checkbox">Checkbox</label>
            </div>
            <div className="flex items-center space-x-2">
              <input type="radio" id="radio" name="radio" className="h-4 w-4 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] focus:ring-blue-500" />
              <label htmlFor="radio">Radio</label>
            </div>
          </div>
        </div>

        {/* Loaders Section */}
        <div className="bg-white p-6 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <h2 className="text-xl font-bold mb-4 border-b-2 border-black pb-1">Loaders</h2>
          <div className="space-y-4">
            <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></div>
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
            </div>
            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-blue-500 animate-pulse" style={{ width: '50%' }}></div>
            </div>
          </div>
        </div>

        {/* Table Section */}
        <div className="bg-white p-6 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <h2 className="text-xl font-bold mb-4 border-b-2 border-black pb-1">Data Table</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-2 border-black">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-2 border-2 border-black text-left">ID</th>
                  <th className="px-4 py-2 border-2 border-black text-left">Name</th>
                  <th className="px-4 py-2 border-2 border-black text-left">Status</th>
                  <th className="px-4 py-2 border-2 border-black text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-2 border-black">
                  <td className="px-4 py-2 border-2 border-black">1</td>
                  <td className="px-4 py-2 border-2 border-black">John Doe</td>
                  <td className="px-4 py-2 border-2 border-black">
                    <span className="inline-block px-2 py-1 bg-green-100 text-green-800 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">Active</span>
                  </td>
                  <td className="px-4 py-2 border-2 border-black">
                    <button className="px-2 py-1 bg-blue-500 text-white border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Edit</button>
                  </td>
                </tr>
                <tr className="border-2 border-black bg-gray-50">
                  <td className="px-4 py-2 border-2 border-black">2</td>
                  <td className="px-4 py-2 border-2 border-black">Jane Smith</td>
                  <td className="px-4 py-2 border-2 border-black">
                    <span className="inline-block px-2 py-1 bg-yellow-100 text-yellow-800 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">Pending</span>
                  </td>
                  <td className="px-4 py-2 border-2 border-black">
                    <button className="px-2 py-1 bg-blue-500 text-white border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Edit</button>
                  </td>
                </tr>
                <tr className="border-2 border-black">
                  <td className="px-4 py-2 border-2 border-black">3</td>
                  <td className="px-4 py-2 border-2 border-black">Bob Johnson</td>
                  <td className="px-4 py-2 border-2 border-black">
                    <span className="inline-block px-2 py-1 bg-red-100 text-red-800 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">Inactive</span>
                  </td>
                  <td className="px-4 py-2 border-2 border-black">
                    <button className="px-2 py-1 bg-blue-500 text-white border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Edit</button>
                  </td>
                </tr>
                <tr className="border-2 border-black bg-gray-50">
                  <td className="px-4 py-2 border-2 border-black">4</td>
                  <td className="px-4 py-2 border-2 border-black">Alice Brown</td>
                  <td className="px-4 py-2 border-2 border-black">
                    <span className="inline-block px-2 py-1 bg-blue-100 text-blue-800 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">Info</span>
                  </td>
                  <td className="px-4 py-2 border-2 border-black">
                    <button className="px-2 py-1 bg-blue-500 text-white border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Edit</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Sidebar Section */}
        <div className="bg-white p-6 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <h2 className="text-xl font-bold mb-4 border-b-2 border-black pb-1">Sidebar</h2>
          <div className="flex">
            <div className="w-64 bg-gray-100 p-4 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <ul className="space-y-2">
                <li className="px-4 py-2 bg-blue-500 text-white border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">Dashboard</li>
                <li className="px-4 py-2 hover:bg-gray-200 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">Profile</li>
                <li className="px-4 py-2 hover:bg-gray-200 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">Settings</li>
                <li className="px-4 py-2 hover:bg-gray-200 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">Logout</li>
              </ul>
            </div>
            <div className="flex-1 p-4 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <p>Main content area</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Components;
