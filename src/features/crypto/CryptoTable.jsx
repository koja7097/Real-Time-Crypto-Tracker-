import { useSelector } from "react-redux";
import './CryptoTable.css';


const CryptoTable = () => {
    const assets = useSelector( state => state.crypto.assets);
  console.log(assets)
    return (
        <div className="table-container">
            <table className="crypto-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Logo</th>
                        <th>Name</th>
                        <th>Symbol</th>
                        <th>Price</th>
                        <th>1h %</th>
                        <th>24h %</th>
                        <th>7d %</th>
                        <th>Market Cap</th>
                        <th>24h volume</th>
                        <th>Circulating Supply</th>
                        <th>Max Supply</th>
                        <th>7D Chart</th>
                    </tr>
                </thead>
                <tbody>
                    {assets.map((asset, index)=> (
                        <tr key={asset.id}>
                            <td>{index + 1}</td>
                            <td><img src={asset.logo} alt={asset.symbol} width="24"/></td>
                            <th>{asset.name}</th>
                            <td>{asset.symbol}</td>
                            <td>{asset.price}</td>
                            <td className={asset.change1h >= 0 ? 'positive' : 'negative'}>
                                {asset.change1h} %
                            </td>
                            <td className={asset.change24h >= 0 ? 'positive' : 'negative'}>
                                {asset.change24h} %
                            </td>
                            <td className={asset.change7d >= 0 ? 'positive' : 'negative'}>
                                {asset.change7d} %
                            </td>
                            <td>{asset.marketCap}</td>
                            <td>{asset.volume24h}</td>
                            <td>{asset.circulatingSupply}</td>
                            <td>{asset.maxSupply}</td>
                            <td><img src={asset.chart} alt="chart" width="60" /></td>
                            
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CryptoTable;