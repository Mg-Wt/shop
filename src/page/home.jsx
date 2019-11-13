import React, { Component } from 'react'
import Child from '../components/child'
export default class Home extends Component {
  render() {
    return (
      <div>
        这是首页
        <Child></Child>
      </div>
    )
  }
}
