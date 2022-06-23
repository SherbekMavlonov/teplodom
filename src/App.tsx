import React from 'react'
import { getProducts } from './store/newProduct/index'
import { useAppDispatch, useAppSelector } from './hook/redux'

const App: React.FC = () => {
  const dispatch = useAppDispatch()
  const state = useAppSelector((state) => state.getNewProducts)

  return (
    <div>
      <ul>
        {state.product?.map((item) => (
          <li key={item._id}>{item.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
