require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install logic bottom trophy name rival rifle coast hunt office army genuine'; 
let testAccounts = [
"0xb923b00f4ca68493ed825ceb3d014f4fafdd55b85ef943c864dd7339f477f20c",
"0x411532fc40c8a1220665eeed4e4d3c15b2c8013b411787cc6cdadf7757c9be2a",
"0xd7fa056e15fe56aaa17b2b9787d94d93ab0b467503c1882259cf74c76229623f",
"0xee763faf39f1460c8a0fb5ae9ee3fdb3eea4df01b50bc5a61d883706e3430402",
"0x996d0b38312331f9b6f436f23c024ef2300ef63d03c42340cff909a2d0892331",
"0xeb42184afe9e674df19eb21a66f351af8de6cfe03befc2eb979566963167a818",
"0x025db6f5520b165e3164a4666dcd2c9d26f5d6542d21790de0cef09308602420",
"0x6f019d8d1d59b1ff74c73c699d4194a41a45d43e2d245731f79f80db05ce15f0",
"0x195d6d1aab824689ab8211ee19f5d253331ab1fba2686c31b950f882813835a4",
"0x34b5d7eb0c480e52c25f01e185dc5e335d75ab25f7e94e31a9b6c6aa455bb7a9"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


