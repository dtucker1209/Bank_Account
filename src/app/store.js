import { configureStore } from "@reduxjs/toolkit";
import Transactions from "../features/transactions/transactionsSlice";




// TODO: Configure the store to use the reducer from the transactions slice.
const store = configureStore({
    reducer: {
        Transactions,
    },
});

export default store;
