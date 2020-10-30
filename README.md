# Message Duplicator Static DApp

Steps to follow before using dapp.

1. Clone the project `git clone https://github.com/sangya2001/duplicate-message-dapp.git`
2. Change the path to project `cd duplicate-message-dapp`
3. Install all the dependencies `npm install`
4. Initialize ganache-cli or ganache GUI
5. Migrate project to local blockchain `truffle migrate`
   _Note_: If you already migrated the project try `truffle migrate --reset`
   _Note_: Check if your ganache is running on port 7545 else config port in truffle.config.js
   ```
   development: {
     host: "127.0.0.1",     // Localhost (default: none)
     port: 7545,            // Standard Ethereum port (default: none)
     network_id: "*",       // Any network (default: none)
    },
   ```
6. Initialize the bundle.js `browserify script.js -o bundle.js`
7. Open index.html

Happy Hacking!
