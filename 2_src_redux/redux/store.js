// 此js用來export 一個store, 整個app只會有一個store
// 從redux 引入createStore, 用於創建store 
import { createStore } from "redux";

// 引入reducer 
import counterReducer from './count_reducer'

// export store
export default createStore(counterReducer)