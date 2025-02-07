import type { AccessArgs, User } from 'payload'

export const anyone: (args: AccessArgs<User>) => boolean = () => true
