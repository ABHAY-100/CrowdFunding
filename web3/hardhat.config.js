/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: '0.8.27',
    defaultNetwork: 'holesky',
    networks: {
      hardhat: {},
      holesky: {
        url: 'https://rpc.ankr.com/eth_holesky',
        accounts: [`0x${process.env.PRIVATE_KEY}`]
      }
    },
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
