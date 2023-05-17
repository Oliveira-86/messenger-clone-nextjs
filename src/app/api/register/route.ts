import bcrypt from 'bcrypt'

import prisma from '@/app/libs/prismadb'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const body = await request.json()
  const { email, name, password } = body

  const hashedPassword = await bcrypt.hash(password, 12)

  try {
    const existUser = await prisma.user.findUnique({
      where: {
        email: email,
      },
    })

    if (existUser) {
      return new NextResponse('This email already exists!', { status: 500 })
    }

    const user = await prisma.user.create({
      data: {
        email,
        name,
        hashedPassword,
      },
    })

    return NextResponse.json(user)
  } catch (error) {
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}
