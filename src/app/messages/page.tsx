'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'

interface Message {
  id: string
  content: string
  sender: string
  timestamp: string
  isRead: boolean
}

interface Conversation {
  id: string
  user: {
    name: string
    image: string
  }
  lastMessage: Message
  messages: Message[]
}

const mockConversations: Conversation[] = [
  {
    id: '1',
    user: {
      name: 'Sarah Wilson',
      image: '/images/hero-bg.jpg'
    },
    lastMessage: {
      id: '1',
      content: 'Hi, is this room still available?',
      sender: 'Sarah Wilson',
      timestamp: '2024-02-20T10:30:00Z',
      isRead: false
    },
    messages: [
      {
        id: '1',
        content: 'Hi, is this room still available?',
        sender: 'Sarah Wilson',
        timestamp: '2024-02-20T10:30:00Z',
        isRead: false
      }
    ]
  },
  {
    id: '2',
    user: {
      name: 'John Smith',
      image: '/images/hero-bg.jpg'
    },
    lastMessage: {
      id: '2',
      content: 'Great! Looking forward to my stay next week.',
      sender: 'John Smith',
      timestamp: '2024-02-19T15:45:00Z',
      isRead: true
    },
    messages: [
      {
        id: '2',
        content: 'Great! Looking forward to my stay next week.',
        sender: 'John Smith',
        timestamp: '2024-02-19T15:45:00Z',
        isRead: true
      }
    ]
  }
]

export default function MessagesPage() {
  const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(null)
  const [newMessage, setNewMessage] = useState('')

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newMessage.trim() || !selectedConversation) return

    // In a real app, this would send the message to an API
    console.log('Sending message:', newMessage)
    setNewMessage('')
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Messages</h1>
        
        <div className="bg-white rounded-lg shadow">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {/* Conversations List */}
            <div className="border-r border-gray-200">
              <div className="p-4">
                <h2 className="text-lg font-medium text-gray-900">Conversations</h2>
              </div>
              <ul className="divide-y divide-gray-200">
                {mockConversations.map((conversation) => (
                  <li
                    key={conversation.id}
                    className={`p-4 hover:bg-gray-50 cursor-pointer ${
                      selectedConversation?.id === conversation.id ? 'bg-gray-50' : ''
                    }`}
                    onClick={() => setSelectedConversation(conversation)}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="relative h-10 w-10 rounded-full overflow-hidden">
                        <Image
                          src={conversation.user.image}
                          alt={conversation.user.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900">
                          {conversation.user.name}
                        </p>
                        <p className="text-sm text-gray-500 truncate">
                          {conversation.lastMessage.content}
                        </p>
                      </div>
                      {!conversation.lastMessage.isRead && (
                        <div className="h-2 w-2 bg-blue-600 rounded-full"></div>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Messages */}
            <div className="col-span-2">
              {selectedConversation ? (
                <div className="h-[600px] flex flex-col">
                  {/* Messages Header */}
                  <div className="p-4 border-b border-gray-200">
                    <div className="flex items-center space-x-4">
                      <div className="relative h-10 w-10 rounded-full overflow-hidden">
                        <Image
                          src={selectedConversation.user.image}
                          alt={selectedConversation.user.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h2 className="text-lg font-medium text-gray-900">
                          {selectedConversation.user.name}
                        </h2>
                      </div>
                    </div>
                  </div>

                  {/* Messages List */}
                  <div className="flex-1 p-4 overflow-y-auto">
                    {selectedConversation.messages.map((message) => (
                      <div
                        key={message.id}
                        className={`mb-4 flex ${
                          message.sender === 'You' ? 'justify-end' : 'justify-start'
                        }`}
                      >
                        <div
                          className={`rounded-lg px-4 py-2 max-w-xs ${
                            message.sender === 'You'
                              ? 'bg-blue-600 text-white'
                              : 'bg-gray-100 text-gray-900'
                          }`}
                        >
                          <p>{message.content}</p>
                          <p className="text-xs mt-1 opacity-75">
                            {new Date(message.timestamp).toLocaleTimeString()}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Message Input */}
                  <div className="p-4 border-t border-gray-200">
                    <form onSubmit={handleSendMessage} className="flex space-x-4">
                      <input
                        type="text"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        placeholder="Type your message..."
                        className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      />
                      <Button type="submit">Send</Button>
                    </form>
                  </div>
                </div>
              ) : (
                <div className="h-[600px] flex items-center justify-center text-gray-500">
                  Select a conversation to start messaging
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 