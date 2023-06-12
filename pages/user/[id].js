import Head from "next/head"
import { useRouter } from "next/router"
import * as React from "react"
import { useGet } from "../../hooks"

export default function Login() {
  const router = useRouter()
  const { id } = router.query
  const { data, error } = useGet(`/api/users/${id}`)

  if (error) return <div>Failed to load</div>

  if (!data) return <div>Loading...</div>

  if (data?.message) {
    return <div>{data.message}</div>
  }

  const { user } = data
  const firstLetter = user.name[0].toUpperCase()

  return (
    <div className="w-4/5 md:w-1/2 mx-auto">
      <Head>
        <title>{user.name}'s Profile</title>
      </Head>
      <div
        className="rounded-full font-bold align-middle p-5 text-6xl text-white bg-yellow-400 text-center mx-auto"
        style={{ width: 100, height: 100, lineHeight: "52px" }}
      >
        {firstLetter}
      </div>
      <div className="text-center p-3">Hello, I'm {user.name}</div>
      <div className="text-center p-3">My email is {user.email}</div>
    </div>
  )
}
