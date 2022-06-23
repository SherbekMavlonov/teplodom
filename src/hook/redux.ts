import { useSelector, TypedUseSelectorHook, useDispatch } from 'react-redux'
import type { RootState, AppDispatch } from '../store/store'

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>()
