import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    assets: [
        {
            id: 1,
            name:  'Bitcoin',
            symbol: 'BTC',
            price: '92425.02',
            change1h: 0.4,
            change24h: 1.8,
            change7d: 9.4,
            marketCap: 1834235615123,
            volume24h: 38005585147	,
            circulatingSupply: 19855450,
            maxSupply: 210000000,
            logo:'/bitcoin-btc-logo.png',
            chart: '/chart2.jpg'
        },
        {
            id: 2,
            name:  'Ethereum',
            symbol: 'ETH',
            price: '1742.76',
            change1h: 0.3,
            change24h: 2.9,
            change7d: 9.2,
            marketCap: 210342076587,
            volume24h: 17413437939,
            circulatingSupply: 120715603,
            maxSupply: 34728400,
            logo:'/ethereum.png',
             chart: '/chart2.jpg'
        },
        {
            id: 3,
            name:  'Tether',
            symbol: 'USDT',
            price: '1.00',
            change1h: 0,
            change24h: 0,
            change7d: 0,
            marketCap: 145655255199,
            volume24h: 34438663104,
            circulatingSupply: 145648071863,
            maxSupply: null,
            logo:'/tether.png',
             chart: '/chart2.jpg'
        },
        {
            id: 4,
            name:  'BNB',
            symbol: 'BNB',
            price: '596.29',
            change1h: 1.2,
            change24h: -0.6,
            change7d: 3.8,
            marketCap: 650000000000,
            volume24h: 985821264,
            circulatingSupply: 153000000,
            maxSupply: 200000000,
            logo:'bnb.png',
             chart: '/chart1.jpg'
        },
        {
            id: 5,
            name:  'Solana',
            symbol: 'SOL',
            price: '149.99',
            change1h: 0.3,
            change24h: 3.7,
            change7d: 10.0,
            marketCap: 75947635276,
            volume24h: 4984007425,
            circulatingSupply: 517312864,
            maxSupply: 210000000,
            logo:'/solana.png',
          chart: '/chart1.jpg'
        },
    ],
};

const CryptoSlice = createSlice({
    name: 'crypto',
    initialState,
    reducers: {
        updateAsset:(state, action) => {
            const {id, updates} = action.payload;
            const index = state.assets.findIndex(asset => asset.id === id);
            if(index !== -1) {
                state.assets[index] = {...state.assets[index], ...updates};
            }
        },
    },
});
export const {updateAsset} = CryptoSlice.actions;
export default CryptoSlice.reducer;