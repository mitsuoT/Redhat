"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Truck,
  Calendar,
  Users,
  FileText,
  Settings,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Clock,
  DollarSign,
} from "lucide-react"
import ScheduleManagement from "@/components/schedule-management"
import CustomerManagement from "@/components/customer-management"
import BillingManagement from "@/components/billing-management"
import VehicleManagement from "@/components/vehicle-management"
import SalesManagement from "@/components/sales-management"

export default function AkabouApp() {
  const [activeTab, setActiveTab] = useState("dashboard")

  const dashboardStats = [
    {
      title: "今日の配送予定",
      value: "12件",
      icon: Truck,
      status: "normal",
      description: "うち緊急案件 2件",
    },
    {
      title: "未処理受注",
      value: "5件",
      icon: AlertTriangle,
      status: "warning",
      description: "要確認案件あり",
    },
    {
      title: "今月売上",
      value: "¥1,250,000",
      icon: DollarSign,
      status: "good",
      description: "前月比 +15%",
    },
    {
      title: "車両稼働率",
      value: "85%",
      icon: CheckCircle,
      status: "good",
      description: "整備予定 1台",
    },
  ]

  const recentAlerts = [
    { type: "urgent", message: "緊急配送依頼：品川区→渋谷区", time: "10分前" },
    { type: "maintenance", message: "車両A-001の定期点検期限が近づいています", time: "1時間前" },
    { type: "billing", message: "未請求案件が3件あります", time: "2時間前" },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
              <Truck className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">赤帽業務管理システム</h1>
              <p className="text-sm text-gray-500">統合業務管理プラットフォーム</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
              オンライン
            </Badge>
            <Button variant="outline" size="sm">
              <Settings className="w-4 h-4 mr-2" />
              設定
            </Button>
          </div>
        </div>
      </header>

      <div className="flex">
        <nav className="w-64 bg-white border-r border-gray-200 min-h-screen p-4">
          <div className="space-y-2">
            <Button
              variant={activeTab === "dashboard" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab("dashboard")}
            >
              <TrendingUp className="w-4 h-4 mr-2" />
              ダッシュボード
            </Button>
            <Button
              variant={activeTab === "schedule" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab("schedule")}
            >
              <Calendar className="w-4 h-4 mr-2" />
              配送スケジュール
            </Button>
            <Button
              variant={activeTab === "customer" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab("customer")}
            >
              <Users className="w-4 h-4 mr-2" />
              顧客・受注管理
            </Button>
            <Button
              variant={activeTab === "billing" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab("billing")}
            >
              <FileText className="w-4 h-4 mr-2" />
              請求・精算
            </Button>
            <Button
              variant={activeTab === "vehicle" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab("vehicle")}
            >
              <Truck className="w-4 h-4 mr-2" />
              車両・備品管理
            </Button>
            <Button
              variant={activeTab === "sales" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab("sales")}
            >
              <TrendingUp className="w-4 h-4 mr-2" />
              営業活動
            </Button>
          </div>
        </nav>

        <main className="flex-1 p-6">
          {activeTab === "dashboard" && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">ダッシュボード</h2>
                <p className="text-gray-600">業務全体の状況を一目で確認できます</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {dashboardStats.map((stat, index) => (
                  <Card key={index}>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium text-gray-600">{stat.title}</CardTitle>
                      <stat.icon
                        className={`w-4 h-4 ${
                          stat.status === "good"
                            ? "text-green-600"
                            : stat.status === "warning"
                              ? "text-yellow-600"
                              : "text-gray-600"
                        }`}
                      />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{stat.value}</div>
                      <p className="text-xs text-gray-500 mt-1">{stat.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <AlertTriangle className="w-5 h-5 mr-2 text-yellow-600" />
                      重要な通知
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {recentAlerts.map((alert, index) => (
                        <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                          <div
                            className={`w-2 h-2 rounded-full mt-2 ${
                              alert.type === "urgent"
                                ? "bg-red-500"
                                : alert.type === "maintenance"
                                  ? "bg-yellow-500"
                                  : "bg-blue-500"
                            }`}
                          />
                          <div className="flex-1">
                            <p className="text-sm font-medium text-gray-900">{alert.message}</p>
                            <p className="text-xs text-gray-500 mt-1">{alert.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Clock className="w-5 h-5 mr-2 text-blue-600" />
                      今日の予定
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                        <div>
                          <p className="text-sm font-medium">9:00 - 配送開始</p>
                          <p className="text-xs text-gray-600">新宿区→池袋区</p>
                        </div>
                        <Badge variant="outline" className="bg-blue-100 text-blue-700">
                          進行中
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="text-sm font-medium">11:30 - 緊急配送</p>
                          <p className="text-xs text-gray-600">品川区→渋谷区</p>
                        </div>
                        <Badge variant="outline" className="bg-red-100 text-red-700">
                          緊急
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="text-sm font-medium">14:00 - 定期配送</p>
                          <p className="text-xs text-gray-600">港区→中央区</p>
                        </div>
                        <Badge variant="outline" className="bg-gray-100 text-gray-700">
                          予定
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {activeTab === "schedule" && <ScheduleManagement />}
          {activeTab === "customer" && <CustomerManagement />}
          {activeTab === "billing" && <BillingManagement />}
          {activeTab === "vehicle" && <VehicleManagement />}
          {activeTab === "sales" && <SalesManagement />}
        </main>
      </div>
    </div>
  )
}
