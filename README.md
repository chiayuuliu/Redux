## 求和範例＿redux
    1. 去除Count 元件本身的狀態（可保留自己使用的）
    
    2. 在.src 下建立redux 資料夾
        - redux
            - store.js
            - count_reducer.js
    
    3. .store.js:
        1) 引入redux 中的 createStore函數，創建一個store
        2) createStore 時引入負責做事的reducer (呼叫store.setState()才可以拿到更新的狀態)
        3) 最後export store.js

    4. .count_reducer.js:
        1) .reducer 本身是一個function, 接收 preState, action, 回傳更新後的狀態
        2) .reducer 有兩個功用：初始化狀態、更新狀態
        3) .reducer 第一次被調用的時候，是store 觸發的，傳遞preState 是 undefined，action：{type:'@@REDUX/init ....'}
    
    5. 在index.js 中偵測store 中狀態的改變，一但改變就重新render <App/>
        ** redux 只負責管理狀態，狀態改變要重新render 畫面要自己寫