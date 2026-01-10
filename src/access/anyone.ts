import type { AccessArgs } from 'payload'

import type { User } from '@/payload-types'

export const anyone: (args: AccessArgs<User>) => boolean = () => true
