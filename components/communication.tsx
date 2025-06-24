"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MessageSquare, Send, Phone, Users, Bell, Search, Plus, MoreVertical } from "lucide-react"

export default function CommunicationComponent() {
  const [activeChat, setActiveChat] = useState<number | null>(1)
  const [newMessage, setNewMessage] = useState("")

  const chatRooms = [
    {
      id: 1,
      name: "松山エリア配送グループ",
      type: "group",
      lastMessage: "明日のみかん配送、手伝える方いませんか？",
      lastTime: "10分前",
      unread: 3,
      members: 12,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      name: "今治運送・田中",
      type: "direct",
      lastMessage: "造船部品の配送でご相談が...",
      lastTime: "30分前",
      unread: 1,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 3,
      name: "冷凍配送専門グループ",
      type: "group",
      lastMessage: "宇和島の水産物配送、冷凍車空きありますか？",
      lastTime: "1時間前",
      unread: 0,
      members: 8,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 4,
      name: "新居浜物流・佐藤",
      type: "direct",
      lastMessage: "化学製品の配送、ありがとうございました！",
      lastTime: "2時間前",
      unread: 0,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 5,
      name: "緊急配送情報",
      type: "group",
      lastMessage: "四国中央市で緊急案件発生",
      lastTime: "3時間前",
      unread: 5,
      members: 25,
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  const messages = [
    {
      id: 1,
      sender: "今治運送・田中",
      content: "お疲れ様です。明日の松山→今治のみかん配送、手伝っていただける方いませんか？",
      time: "14:30",
      isOwn: false,
      avatar: "/placeholder.svg?height=32&width=32",
    },
    {
      id: 2,
      sender: "宇和島配送・山田",
      content: "時間帯はどのくらいでしょうか？",
      time: "14:32",
      isOwn: false,
      avatar: "/placeholder.svg?height=32&width=32",
    },
    {
      id: 3,
      sender: "あなた",
      content: "午前中でしたら対応可能です。詳細を教えてください。",
      time: "14:35",
      isOwn: true,
      avatar: "/placeholder.svg?height=32&width=32",
    },
    {
      id: 4,
      sender: "今治運送・田中",
      content: "ありがとうございます！10時集荷で12時配送完了予定です。料金は8,000円でいかがでしょうか？",
      time: "14:37",
      isOwn: false,
      avatar: "/placeholder.svg?height=32&width=32",
    },
    {
      id: 5,
      sender: "あなた",
      content: "承知いたしました。明日10時に集荷先でお待ちしております。",
      time: "14:40",
      isOwn: true,
      avatar: "/placeholder.svg?height=32&width=32",
    },
  ]

  const notifications = [
    {
      id: 1,
      type: "message",
      title: "新しいメッセージ",
      content: "緊急配送情報グループから新着メッセージ",
      time: "5分前",
    },
    {
      id: 2,
      type: "job",
      title: "新規案件通知",
      content: "松山市内でみかん配送の新しい案件が投稿されました",
      time: "15分前",
    },
    {
      id: 3,
      type: "system",
      title: "システム通知",
      content: "プロフィール情報の更新をお願いします",
      time: "1時間前",
    },
  ]

  const sendMessage = () => {
    if (newMessage.trim()) {
      // メッセージ送信処理（実際のアプリではAPIコール）
      console.log("メッセージ送信:", newMessage)
      setNewMessage("")
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">コミュニケーション</h2>
        <p className="text-gray-600">愛媛県内の赤帽事業者同士の情報共有とコミュニケーション</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-[600px]">
        {/* チャットルーム一覧 */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center">
                <MessageSquare className="w-5 h-5 mr-2" />
                チャット
              </CardTitle>
              <Button size="sm" variant="outline">
                <Plus className="w-4 h-4" />
              </Button>
            </div>
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input placeholder="検索..." className="pl-10" />
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="space-y-1">
              {chatRooms.map((room) => (
                <div
                  key={room.id}
                  className={`p-3 cursor-pointer hover:bg-gray-50 ${
                    activeChat === room.id ? "bg-blue-50 border-r-2 border-blue-500" : ""
                  }`}
                  onClick={() => setActiveChat(room.id)}
                >
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <Avatar className="w-10 h-10">
                        <AvatarImage src={room.avatar || "/placeholder.svg"} />
                        <AvatarFallback>
                          {room.type === "group" ? <Users className="w-5 h-5" /> : room.name[0]}
                        </AvatarFallback>
                      </Avatar>
                      {room.unread > 0 && (
                        <Badge className="absolute -top-1 -right-1 w-5 h-5 p-0 flex items-center justify-center text-xs bg-red-500">
                          {room.unread}
                        </Badge>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <p className="font-medium text-sm truncate">{room.name}</p>
                        <span className="text-xs text-gray-500">{room.lastTime}</span>
                      </div>
                      <p className="text-xs text-gray-600 truncate">{room.lastMessage}</p>
                      {room.type === "group" && <p className="text-xs text-gray-400">{room.members}人のメンバー</p>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* チャット画面 */}
        <Card className="lg:col-span-2">
          {activeChat ? (
            <>
              <CardHeader className="border-b">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg?height=40&width=40" />
                      <AvatarFallback>
                        <Users className="w-5 h-5" />
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold">松山エリア配送グループ</h3>
                      <p className="text-sm text-gray-500">12人のメンバー</p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline">
                      <Phone className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="outline">
                      <MoreVertical className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex flex-col h-96">
                <div className="flex-1 overflow-y-auto space-y-4 p-4">
                  {messages.map((message) => (
                    <div key={message.id} className={`flex ${message.isOwn ? "justify-end" : "justify-start"}`}>
                      <div
                        className={`flex space-x-2 max-w-xs lg:max-w-md ${message.isOwn ? "flex-row-reverse space-x-reverse" : ""}`}
                      >
                        <Avatar className="w-8 h-8">
                          <AvatarImage src={message.avatar || "/placeholder.svg"} />
                          <AvatarFallback>{message.sender[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                          {!message.isOwn && <p className="text-xs text-gray-500 mb-1">{message.sender}</p>}
                          <div
                            className={`p-3 rounded-lg ${
                              message.isOwn ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-900"
                            }`}
                          >
                            <p className="text-sm">{message.content}</p>
                          </div>
                          <p className="text-xs text-gray-500 mt-1">{message.time}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="border-t p-4">
                  <div className="flex space-x-2">
                    <Textarea
                      placeholder="メッセージを入力..."
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      onKeyPress={handleKeyPress}
                      className="flex-1 min-h-[40px] max-h-[120px]"
                    />
                    <Button onClick={sendMessage} disabled={!newMessage.trim()}>
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </>
          ) : (
            <CardContent className="flex items-center justify-center h-full">
              <div className="text-center">
                <MessageSquare className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">チャットルームを選択してください</p>
              </div>
            </CardContent>
          )}
        </Card>

        {/* 通知・お知らせ */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Bell className="w-5 h-5 mr-2" />
              通知
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="space-y-1">
              {notifications.map((notification) => (
                <div key={notification.id} className="p-3 hover:bg-gray-50 cursor-pointer">
                  <div className="flex items-start space-x-3">
                    <div
                      className={`w-2 h-2 rounded-full mt-2 ${
                        notification.type === "message"
                          ? "bg-blue-500"
                          : notification.type === "job"
                            ? "bg-green-500"
                            : "bg-gray-500"
                      }`}
                    />
                    <div className="flex-1">
                      <p className="font-medium text-sm">{notification.title}</p>
                      <p className="text-xs text-gray-600 mt-1">{notification.content}</p>
                      <p className="text-xs text-gray-400 mt-1">{notification.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* クイックアクション */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h4 className="font-medium">グループ作成</h4>
                <p className="text-sm text-gray-600">新しいグループチャットを作成</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h4 className="font-medium">一斉通知</h4>
                <p className="text-sm text-gray-600">重要な情報を一斉配信</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                <Bell className="w-5 h-5 text-yellow-600" />
              </div>
              <div>
                <h4 className="font-medium">通知設定</h4>
                <p className="text-sm text-gray-600">通知の詳細設定を変更</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
