import nextAuth from 'next-auth'
import { authConfig } from '@/app/configs/auth'

const handler = nextAuth(authConfig)

export { handler as GET, handler as POST}
