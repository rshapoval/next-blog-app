'use client'

import { usePosts } from '@/store'
import { FormEventHandler, useState } from 'react'

export default function PostSearch() {
  const [search, setSearch] = useState('')
  const getPostsBySearch = usePosts(state => state.getPostsBySearch)

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()

    await getPostsBySearch(search)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='search'
        placeholder='Search'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type='submit'>Search</button>
    </form>
  )
}
