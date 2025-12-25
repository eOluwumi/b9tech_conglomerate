import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
    }

    // Here you would integrate with your email service (e.g., Mailchimp, ConvertKit)
    // For now, we'll just log it
    console.log('New subscription:', email)

    // TODO: Implement actual email service integration
    // Example: Add to Mailchimp list, send confirmation email, etc.

    return NextResponse.json({ message: 'Subscribed successfully' })
  } catch (error) {
    console.error('Subscription error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}