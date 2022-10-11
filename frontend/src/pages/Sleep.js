import { useEffect } from 'react'
import { useAuthContext } from "../hooks/useAuthContext"
import { useSleepsContext } from '../hooks/useSleepsContext'
import { Link, useNavigate } from "react-router-dom"
import { useLogout } from '../hooks/useLogout'
import useAxiosPrivate from "../hooks/useAxiosPrivate"
import SleepDetails from "../components/SleepDetails"
import SleepForm from "../components/SleepForm"

const Sleep = () => {
  const {user} = useAuthContext()
  const {sleeps, dispatch} = useSleepsContext()
  const axiosPrivate = useAxiosPrivate()

  useEffect(() => {
    let isMounted = true
    const abortController = new AbortController()

    const getSleeps = async () => {
      try {
        const response = await axiosPrivate.get('/api/sleeps', {
          signal: abortController.signal
        })
        isMounted && dispatch({type: 'SET_SLEEPS', payload: response.data})
      } catch (err) {
        console.log(err)
      }
    }

    if(user){
      getSleeps()
    }

    return () => {
      isMounted = false
      abortController.abort()
    }
  }, [axiosPrivate, dispatch, user])

  return (
    <div className="home">
      
      <div className="sleeps">
        {sleeps && sleeps.map(sleep => (
          <SleepDetails sleep={sleep} key={sleep._id} />
        ))}
      </div>
      <SleepForm />
      <Link to="/">Home</Link>
    </div>
  )
}

export default Sleep