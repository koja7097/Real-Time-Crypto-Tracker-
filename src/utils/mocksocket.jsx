import { updateAsset } from "../features/crypto/CryptoSlice";

const randomFloat = (min, max) => parseFloat((Math.random()*(max-min) + min).toFixed(2));
const randomChange = () => randomFloat(-5, 5);

export const startMockSocket = (store) => {
    setInterval(() => {
        const state = store.getState();
        const assets = state.crypto.assets;

        assets.forEach(assets => {
            const updates = {
                price: parseFloat((assets.price * (1 + randomChange()/ 100)).toFixed(2)),
                change1h: randomChange(),
                change24h: randomChange(),
                change7h: randomChange(),
                volume24h: assets.volume24h + randomFloat(-1000000000, 10000000),
            };
            store.dispatch(updateAsset({id: assets.id, updates}))
        });
    }, 5000); // updates every 15secs
}