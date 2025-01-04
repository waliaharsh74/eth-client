import { useAccount, useConnect, useConnectors, useDisconnect } from 'wagmi'
import TotalSupply from './TotalSupply'

const ConnectWallet = () => {
    const availableWallets = useConnectors()
    const { address } = useAccount()
    const { disconnect } = useDisconnect()
    const { connect } = useConnect()
    if (address) {
        return (
            <div>
                your account is {address}
                <button onClick={() => disconnect()}>Disconnect</button>
                <TotalSupply addressof={address} />
            </div>
        )
    }
    return (
        <div>{availableWallets.map((c) => <button onClick={() => connect({ connector: c })}>{c.name}</button>)}</div>
    )
}

export default ConnectWallet