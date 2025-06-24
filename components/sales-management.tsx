"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { TrendingUp, Users, Target, Phone, Mail, Calendar, Plus, Search, FileText } from "lucide-react"

export default function SalesManagement() {
  const [prospects, setProspects] = useState([
    {
      id: 1,
      company: "新規物流株式会社",
      contact: "山田太郎",
      phone: "03-1111-2222",
      email: "yamada@shinki.co.jp",
      status: "商談中",
      lastContact: "2024-01-18",
      nextAction: "提案書提出",
      estimatedValue: 150000,
      probability: 70,
    },
    {
      id: 2,
      company: "テスト運送",
      contact: "鈴木花子",
      phone: "03-3333-4444",
      email: "suzuki@test-unsou.co.jp",
      status: "初回訪問済",
      lastContact: "2024-01-15",
      nextAction: "フォローアップ",
      estimatedValue: 80000,
      probability: 40,
    },
    {
      id: 3,
      company: "サンプル商事",
      contact: "田中次郎",
      phone: "03-5555-6666",
      email: "tanaka@sample-shouji.co.jp",
      status: "見積提出済",
      lastContact: "2024-01-20",
      nextAction: "回答待ち",
      estimatedValue: 200000,
      probability: 85,
    },
  ])

  const [activities, setActivities] = useState([
    {
      id: 1,
      date: "2024-01-20",
      type: "訪問",
      company: "サンプル商事",
      summary: "見積書を提出。好感触を得られた。",
      nextStep: "来週回答予定",
    },
    {
      id: 2,
      date: "2024-01-18",
      type: "電話",
      company: "新規物流株式会社",
      summary: "提案内容について詳細説明。追加資料を要求された。",
      nextStep: "提案書作成中",
    },
    {
      id: 3,
      date: "2024-01-15",
      type: "メール",
      company: "テスト運送",
      summary: "初回訪問のお礼と次回アポイントの調整。",
      nextStep: "来週フォローアップ",
    },
  ])

  const [activeTab, setActiveTab] = useState("prospects")

  const getStatusColor = (status: string) => {
    switch (status) {
      case "商談中":
        return "bg-blue-100 text-blue-700"
      case "見積提出済":
        return "bg-yellow-100 text-yellow-700"
      case "初回訪問済":
        return "bg-green-100 text-green-700"
      case "成約":
        return "bg-purple-100 text-purple-700"
      case "失注":
        return "bg-red-100 text-red-700"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  const getProbabilityColor = (probability: number) => {
    if (probability >= 70) return "text-green-600"
    if (probability >= 40) return "text-yellow-600"
    return "text-red-600"
  }

  const totalProspects = prospects.length
  const totalEstimatedValue = prospects.reduce((sum, p) => sum + p.estimatedValue, 0)
  const averageProbability = prospects.reduce((sum, p) => sum + p.probability, 0) / prospects.length
  const highProbabilityDeals = prospects.filter((p) => p.probability >= 70).length

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">営業活動・新規開拓</h2>
          <p className="text-gray-600">営業活動の管理とAI支援による効率化</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <FileText className="w-4 h-4 mr-2" />
            AI提案書作成
          </Button>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            新規見込客追加
          </Button>
        </div>
      </div>

      {/* AI機能カード */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="border-blue-200 bg-blue-50">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm text-blue-800">AI強み発掘</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-blue-700 mb-3">成約事例から勝ちパターンを分析</p>
            <Button size="sm" variant="outline" className="bg-white text-blue-700 border-blue-300">
              分析実行
            </Button>
          </CardContent>
        </Card>

        <Card className="border-green-200 bg-green-50">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm text-green-800">見込客自動発見</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-green-700 mb-3">類似企業を自動で抽出・リスト化</p>
            <Button size="sm" variant="outline" className="bg-white text-green-700 border-green-300">
              リスト作成
            </Button>
          </CardContent>
        </Card>

        <Card className="border-yellow-200 bg-yellow-50">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm text-yellow-800">AI営業トーク</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-yellow-700 mb-3">トップ営業のトークを再現</p>
            <Button size="sm" variant="outline" className="bg-white text-yellow-700 border-yellow-300">
              トーク練習
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* 営業統計サマリー */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">見込客数</CardTitle>
            <Users className="w-4 h-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalProspects}社</div>
            <p className="text-xs text-gray-500 mt-1">今月 +3社</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">予想売上</CardTitle>
            <TrendingUp className="w-4 h-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">¥{totalEstimatedValue.toLocaleString()}</div>
            <p className="text-xs text-gray-500 mt-1">確度加重平均</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">平均確度</CardTitle>
            <Target className="w-4 h-4 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{averageProbability.toFixed(0)}%</div>
            <p className="text-xs text-gray-500 mt-1">前月比 +5%</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">有望案件</CardTitle>
            <Target className="w-4 h-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-600">{highProbabilityDeals}件</div>
            <p className="text-xs text-gray-500 mt-1">確度70%以上</p>
          </CardContent>
        </Card>
      </div>

      {/* タブ切り替え */}
      <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg w-fit">
        <Button
          variant={activeTab === "prospects" ? "default" : "ghost"}
          size="sm"
          onClick={() => setActiveTab("prospects")}
        >
          見込客管理
        </Button>
        <Button
          variant={activeTab === "activities" ? "default" : "ghost"}
          size="sm"
          onClick={() => setActiveTab("activities")}
        >
          営業活動履歴
        </Button>
      </div>

      {activeTab === "prospects" && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">見込客一覧</CardTitle>
            <div className="flex items-center space-x-4">
              <div className="flex-1">
                <Input placeholder="会社名、担当者名で検索..." />
              </div>
              <Select>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="ステータス" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">全て</SelectItem>
                  <SelectItem value="negotiating">商談中</SelectItem>
                  <SelectItem value="quoted">見積提出済</SelectItem>
                  <SelectItem value="visited">初回訪問済</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline">
                <Search className="w-4 h-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {prospects.map((prospect) => (
                <Card key={prospect.id} className="border-l-4 border-l-blue-500">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <span className="font-semibold text-lg">{prospect.company}</span>
                        <Badge className={getStatusColor(prospect.status)}>{prospect.status}</Badge>
                        <Badge
                          variant="outline"
                          className={`border-gray-300 ${getProbabilityColor(prospect.probability)}`}
                        >
                          確度 {prospect.probability}%
                        </Badge>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="font-bold text-lg">¥{prospect.estimatedValue.toLocaleString()}</span>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            <Phone className="w-4 h-4 mr-1" />
                            電話
                          </Button>
                          <Button variant="outline" size="sm">
                            <Mail className="w-4 h-4 mr-1" />
                            メール
                          </Button>
                          <Button variant="outline" size="sm">
                            編集
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2 text-sm">
                          <span className="text-gray-600">担当者:</span>
                          <span className="font-medium">{prospect.contact}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <Phone className="w-4 h-4 text-gray-400" />
                          <span>{prospect.phone}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <Mail className="w-4 h-4 text-gray-400" />
                          <span>{prospect.email}</span>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">最終接触:</span>
                          <span className="font-medium">{prospect.lastContact}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">次回アクション:</span>
                          <span className="font-medium">{prospect.nextAction}</span>
                        </div>
                      </div>
                    </div>

                    {prospect.probability >= 70 && (
                      <div className="mt-3 p-2 bg-green-50 border border-green-200 rounded-lg">
                        <div className="flex items-center text-green-700">
                          <Target className="w-4 h-4 mr-2" />
                          <span className="text-sm font-medium">有望案件 - 積極的なフォローアップを推奨</span>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {activeTab === "activities" && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">営業活動履歴</CardTitle>
            <div className="flex items-center space-x-4">
              <div className="flex-1">
                <Input placeholder="会社名、活動内容で検索..." />
              </div>
              <Select>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="活動種別" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">全て</SelectItem>
                  <SelectItem value="visit">訪問</SelectItem>
                  <SelectItem value="call">電話</SelectItem>
                  <SelectItem value="email">メール</SelectItem>
                  <SelectItem value="meeting">会議</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline">
                <Search className="w-4 h-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {activities.map((activity) => (
                <Card key={activity.id} className="border-l-4 border-l-green-500">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4 text-gray-400" />
                          <span className="font-medium">{activity.date}</span>
                        </div>
                        <Badge variant="outline" className="bg-blue-100 text-blue-700 border-blue-200">
                          {activity.type}
                        </Badge>
                        <span className="font-semibold">{activity.company}</span>
                      </div>
                      <Button variant="outline" size="sm">
                        詳細
                      </Button>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <p className="text-sm text-gray-600 mb-1">活動内容</p>
                        <p className="text-sm bg-gray-50 p-3 rounded-lg">{activity.summary}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 mb-1">次のステップ</p>
                        <p className="text-sm font-medium text-blue-700">{activity.nextStep}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
