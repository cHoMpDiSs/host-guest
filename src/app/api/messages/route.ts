import { NextResponse } from 'next/server'

// Mock data
const mockMessages = [
  {
    id: '1',
    conversationId: '1',
    content: 'Hi, is this room still available?',
    sender: 'Sarah Wilson',
    timestamp: '2024-02-20T10:30:00Z',
    isRead: false
  },
  {
    id: '2',
    conversationId: '2',
    content: 'Great! Looking forward to my stay next week.',
    sender: 'John Smith',
    timestamp: '2024-02-19T15:45:00Z',
    isRead: true
  }
]

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const conversationId = searchParams.get('conversationId')

  if (conversationId) {
    const filteredMessages = mockMessages.filter(
      message => message.conversationId === conversationId
    )
    return NextResponse.json(filteredMessages)
  }

  return NextResponse.json(mockMessages)
}

export async function POST(request: Request) {
  try {
    const data = await request.json()
    
    const newMessage = {
      id: Math.random().toString(36).substr(2, 9),
      ...data,
      timestamp: new Date().toISOString(),
      isRead: false
    }

    // In a real app, this would be saved to a database
    return NextResponse.json(newMessage)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    )
  }
} 