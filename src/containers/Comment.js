import React from 'react'

export default function Comment(props) {
  const { match:{ params: { id } } } = props

  React.useEffect(() => {
    console.log('Comment -> id', id)
  }, [])

  return (
    <div>
      Comment
    </div>
  )
}
