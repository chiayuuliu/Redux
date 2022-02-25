/* 
    **用來做事的reducer
    1. 用來為count 服務的reducer,reducer本身就是一個函數
    2. reducer 函數會接到兩個參數，分別為（之前的狀態,動作對象）(preState, action)
    reducer 只做加工，不管加工前的判斷，最後回傳更新的狀態給store
    action 內部包含type(做什麼事) & data(數據)
*/

// 初始化，沒有先前的值，就帶入initState=0，直接回傳preState的值
const initState = 0
export default function countReducer(preState=initState, action) {
    const {type, data} = action

    switch (type) {
        // 加法
        case 'increment':
            return preState + data
        // 減法 
        case 'decrement':
            return preState - data
        
        // 初始化  
        default:
            return preState
    }
}