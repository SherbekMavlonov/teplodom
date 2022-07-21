import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import NotFound from '../pages/notFound'

const generatePage = (pageName: string) => {
  const component = () => require(`../pages/${pageName}`).default
  try {
    return React.createElement(component())
  } catch (err) {
    return <NotFound />
  }
}

const PageRender = () => {
  const { page, id, name } = useParams()
  console.log(name)

  let pageName = ''
  if (name) {
    pageName = `${page}/[name]`
  } else if (id) {
    pageName = `${page}/[id]`
  } else {
    pageName = `${page}`
  }

  return generatePage(pageName)
}

export default PageRender
