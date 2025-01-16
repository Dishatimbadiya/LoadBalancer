import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  const [algorithm, setAlgorithm] = useState('round-robin');
  const [numServers, setNumServers] = useState(5);
  const [serversInitialized, setServersInitialized] = useState(false); // Track if servers are initialized

  const handleInitialize = () => {
    // Logic to initialize the system with the selected algorithm and number of servers
    console.log(`Initializing with ${algorithm} and ${numServers} servers`);
    setServersInitialized(true); // Set serversInitialized to true after initialization
  };

  const handleSendRequest = () => {
    // Logic to send a request after initializing
    console.log(`Sending request using ${algorithm}`);
  };

  const incrementServers = () => {
    if (numServers < 20) {
      setNumServers(numServers + 1);
    }
  };

  const decrementServers = () => {
    if (numServers > 1) {
      setNumServers(numServers - 1);
    }
  };

  return (
    <div className="min-h-screen bg-purple-50 flex flex-col items-center justify-center p-6">
      <Head>
        <title>Load Balancer Visualization</title>
      </Head>

      <div className="text-center text-purple-700">
        <h1 className="text-5xl font-extrabold mb-8">Load Balancer Visualization</h1>

        {/* Algorithm Selection Section */}
        <div className="flex items-center justify-center mb-6">
          <label htmlFor="algorithm" className="mr-3 text-xl">Select Algorithm:</label>
          <select
            id="algorithm"
            className="border border-gray-300 rounded-md p-3 text-gray-800 text-lg"
            value={algorithm}
            onChange={(e) => setAlgorithm(e.target.value)}
          >
            <option value="round-robin">Round Robin (1 Thread)</option>
            <option value="rr-multiple-threads">Round Robin (Multiple Threads)</option>
            <option value="weighted-rr">Weighted Round Robin</option>
            <option value="least-connect">Least Connect</option>
          </select>
        </div>

        {/* Number of Servers Section with Increment/Decrement */}
        <div className="flex items-center justify-center mb-8">
        {!serversInitialized && (
              <>
          <label htmlFor="servers" className="mr-3 text-xl">Number of Servers:</label>
         
          <div className="flex items-center space-x-4">
            
                <button
                  onClick={decrementServers}
                  className="px-6 py-3 bg-purple-400 text-white rounded-md hover:bg-purple-700 transition duration-300"
                >
                  -
                </button>
                <input
                  type="number"
                  id="servers"
                  className="w-20 text-center border border-gray-300 text-black rounded-md p-3 text-lg"
                  value={numServers}
                  readOnly={serversInitialized}
                />
                <button
                  onClick={incrementServers}
                  className="px-6 py-3 bg-purple-400 text-white rounded-md hover:bg-purple-700 transition duration-300"
                >
                  +
                </button>
                </div>
              </>
            )}
            {!serversInitialized && (
              <button
                onClick={handleInitialize}
                className="ml-6 px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition duration-300"
              >
                Initialize
              </button>
            )}
          
        </div>

        {/* Server Boxes Section */}
        {serversInitialized && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8 mb-8 w-full">
            {Array.from({ length: numServers }).map((_, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-8 bg-purple-300 text-white rounded-lg shadow-2xl transform hover:scale-110 transition-all duration-300"
                style={{ height: '200px', width: '200px' }}
              >
                <div className="text-4xl mb-4">🖥️</div>
                <span className="text-xl font-semibold">Server {index + 1}</span>
              </div>
            ))}
          </div>
        )}

        {/* Send Request Section */}
        <div>
          <p className="text-lg mb-3">Generate Request:</p>
          <button
            onClick={handleSendRequest}
            className="px-8 py-4 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition duration-300"
          >
            Send Request
          </button>
        </div>
      </div>
    </div>
  );
}
