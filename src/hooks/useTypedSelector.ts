import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { RootState } from '../store/rootReduser'

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
