
import './App.css'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider } from 'wagmi'
import { config } from './config'
import ConnectWallet from './Components/ConnectWallet'

const queryClient = new QueryClient()

function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ConnectWallet />

      </QueryClientProvider>
    </WagmiProvider>
  )
}

export default App;