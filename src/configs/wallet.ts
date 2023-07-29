import { InjectedConnector } from '@wagmi/core';
import { arbitrum, arbitrumGoerli } from '@wagmi/core/chains';
import { publicProvider } from '@wagmi/core/providers/public';
import { WagmiConfig, configureChains, createClient } from 'wagmi';
import { isProd } from './common';

export const chainId = isProd
  ? [arbitrum]
  : [
      {
        ...arbitrumGoerli,
        name: arbitrumGoerli.name,
        alchemy: {
          http: ['https://arb-goerli.g.alchemy.com/v2/'],
          webSocket: ['wss://arb-goerli.g.alchemy.com/v2/'],
        },
        infura: {
          http: ['https://arbitrum-goerli.infura.io/v3/'],
          webSocket: ['wss://arbitrum-goerli.infura.io/ws/v3/'],
        },
        default: {
          http: ['https://goerli-rollup.arbitrum.io/rpc/'],
        },
        public: {
          http: ['https://goerli-rollup.arbitrum.io/rpc/'],
        },
      },
    ];

export const injectedConnector = new InjectedConnector({
  chains: [...chainId],
  // options: {
  //   getProvider: () => ({
  //     ...ethersProvider,
  //     emit: ethersProvider?.emit,
  //     request: ethersProvider.send,
  //     isMetaMask: false,
  //   }),
  // },
});

const { provider, webSocketProvider } = configureChains([...chainId], [publicProvider()]);

const client = createClient({
  autoConnect: false,
  // connectors: [magicAuthConnector, particleConnector as any, injectedConnector, web3AuthConnector],
  connectors: [injectedConnector],
  provider,
  // provider: getDefaultProvider(),
  webSocketProvider,
});

export { client, WagmiConfig as WagmiProvider };
