import React, { Component } from 'react'

import TextField from '@material-ui/core/TextField'

import Title from './Title'
import SubTitle from './SubTitle'

class AppClass extends Component {
  state = {
    subTitle: '',
    title   : '',
    user    : {
      lastName: '',
      name    : ''
    }
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('shouldComponentUpdate')
  //   // return false

  //   return true
  // }

  componentDidMount() {
    console.log('componentDidMount')
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
  }

  render() {
    const { title, subTitle, user } = this.state

    return (
      <div>
        <TextField onChange={ev => this._handleChange('title', ev.target.value)} value={title} />
        <TextField onChange={ev => this._handleChange('subTitle', ev.target.value)} value={subTitle} />
        <Title title={title} />
        {/* <SubTitle subTitle={subTitle} user={user} /> */}
        <SubTitle user={user} />
      </div>
    )
  }

  _handleChange = (key, value) => {
    this.setState({
      [key]: value
    })
  }

  _handleChangeTitle = ev => {
    this.setState({
      title: ev.target.value
    })
  }

  _handleChangeSubTitle = ev => {
    this.setState({
      subTitle: ev.target.value
    })
  }
}

export default AppClass
