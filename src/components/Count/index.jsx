import React, { Component } from 'react'

// 引入store 用於存取redux裡保存的狀態
import store from '../../redux/store'
// redux 只做狀態管理，會更新狀態，但不會自動render 

export default class Count extends Component {

	state = {carName:'BensC63'}

	// 也可以寫在最外面的index.js 
	// 偵測redux 中狀態變化，只要有變化就render
	// 當元件掛載的時候就啟動偵測
	//检测redux中状态的变化，只要变化，就调用render，動用到setState 就會啟動render
	// componentDidMount(){
	// 	store.subscribe(()=>{ 
	// 		this.setState({})
	// 	})
	// } 
	
	//加法
	increment = ()=>{
		const {value} = this.selectNumber
		store.dispatch({type:'increment',data:value*1})
	}
	//减法
	decrement = ()=>{
		const {value} = this.selectNumber
		store.dispatch({type:'decrement',data:value*1})
	}
	//奇数再加
	incrementIfOdd = ()=>{
		const {value} = this.selectNumber
		// 先從redux 裡面拿取狀態值，再做運算
		const count = store.getState()
		if(count % 2 !== 0){
			store.dispatch({type:'increment',data:value*1})
		}
	}
	//异步加
	incrementAsync = ()=>{
		const {value} = this.selectNumber
		setTimeout(()=>{
			store.dispatch({type:'increment',data:value*1})
		},500)
	}


	render() { 
		return (
			<div>
				<h1>Total{store.getState()}</h1>
				<select ref={c => this.selectNumber = c}>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
				</select>&nbsp;
				<button onClick={this.increment}>+</button>&nbsp;
				<button onClick={this.decrement}>-</button>&nbsp;
				<button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>&nbsp;
				<button onClick={this.incrementAsync}>异步加</button>&nbsp;
			</div>
		)
	}
}
