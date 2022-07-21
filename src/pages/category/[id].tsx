import React from 'react'
import { useParams } from 'react-router-dom'

const OneCategory = () => {
  const { id } = useParams()
  console.log(id)

  return <div>One Category Page</div>
}

export default OneCategory
