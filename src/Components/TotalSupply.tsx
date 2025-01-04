import { useReadContract } from 'wagmi'
import { USDTABI } from '../ABIs'
type Props = {
    addressof: `0x${string}`
}
const TotalSupply: React.FC<Props> = ({ addressof }) => {
    const { data, isLoading, error } = useReadContract({
        address: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
        abi: USDTABI,
        functionName: 'balanceOf',
        args: [addressof]
    })
    if (isLoading) {
        return (
            <div>Loading...</div>
        )
    }
    if (error) {
        return (
            <div>Error: {error.message}</div>
        )
    }
    return (
        <div>Total Supply {data?.toString()}</div>
    )
}

export default TotalSupply