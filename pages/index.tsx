import { Login } from '@/containers/Login'
import { Home } from '@/containers/Home'
import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Index() {

  const [accessToken, setAccessToken] = useState<string | null>(null);

  useEffect(() => {
    if(typeof window!=='undefined') {
      const token = localStorage.getItem('accessToken')
      if(token) {
        return setAccessToken(token)
      }
      setAccessToken('')
    }
  }, [])

  if (accessToken === null){
    return  <></>
  }

  return (
    accessToken ? <Home setAccessToken={setAccessToken}/> : <Login setAccessToken={setAccessToken}/>
  )
}
