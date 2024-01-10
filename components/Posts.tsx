import Link from 'next/link'

type Props = {
  posts: any[]
}

export default function Posts({ posts }: Props) {
  return (
    <ul>
      {posts.map((post: any) => (
        <li key={post.id}>
          <Link href={`/blog/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  )
}
