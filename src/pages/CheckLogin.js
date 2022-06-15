import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { AuthContext } from '../App'

export default function CheckLogin() {
  const navigate = useNavigate()
  const { state: { isAuthenticated } } = useContext(AuthContext)
  if (isAuthenticated) return navigate('/dashboard/app')
  return navigate('/login')
}
