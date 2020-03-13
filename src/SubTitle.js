import React, { Component } from 'react'

export default class SubTitle extends Component {
//   shouldComponentUpdate(nextProps) {
//     if(nextProps.subTitle !== this.props.subTitle)
//       return true

  //     return false
  //   }

  render() {
    const { user } = this.props
    console.log('Render ', user)
    console.log('Render ss', user)

    return (
      <div>
        {/* {subTitle} */}
        SubTitle
      </div>
    )
  }
}
