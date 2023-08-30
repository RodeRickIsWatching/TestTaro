import { InjectedConnector } from '@wagmi/core';
import { arbitrum, arbitrumGoerli, bsc, bscTestnet } from '@wagmi/core/chains';
import { publicProvider } from '@wagmi/core/providers/public';
import { WagmiConfig, configureChains, createClient } from 'wagmi';
import { prod } from './common';

export const chainId = prod ? [bsc] : [bscTestnet];

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
