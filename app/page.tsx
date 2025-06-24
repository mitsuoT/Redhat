"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Truck, Search, MapPin, MessageSquare, Calculator, Clock, Users, Settings, Bell, Menu } from "lucide-react"
import JobSearchComponent from "@/components/job-search"
import PricingComponent from "@/components/pricing"
import MapComponent from "@/components/map"
import CommunicationComponent from "@/components/communication"
import CarrierSearchComponent from "@/components/carrier-search"
import DriverRegistrationComponent from "@/components/driver-registration"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function AkabouPlatform() {
  const [activeTab, setActiveTab] = useState("dashboard")
  const [userType, setUserType] = useState<"carrier" | "shipper">("carrier") // carrier: 赤帽事業者, shipper: 荷主

  const dashboardStats = [
    {
      title: "新着求車案件",
      value: "8件",
      icon: Search,
      status: "new",
      description: "今日の新規案件",
    },
    {
      title: "進行中の配送",
      value: "3件",
      icon: Truck,
      status: "active",
      description: "現在対応中",
    },
    {
      title: "今月の売上",
      value: "¥485,000",
      icon: Calculator,
      status: "good",
      description: "前月比 +12%",
    },
    {
      title: "評価スコア",
      value: "4.8",
      icon: Users,
      status: "excellent",
      description: "5.0満点中",
    },
  ]

  // recentJobsを愛媛県版に更新
  const recentJobs = [
    {
      id: 1,
      title: "松山市→今治市 みかん配送",
      distance: "42.3km",
      price: "¥12,500",
      time: "30分前",
      urgent: true,
      pickupTime: "14:30",
      deliveryTime: "15:45",
    },
    {
      id: 2,
      title: "新居浜市→四国中央市 化学製品配送",
      distance: "28.7km",
      price: "¥9,800",
      time: "1時間前",
      urgent: false,
      pickupTime: "16:00",
      deliveryTime: "17:00",
    },
    {
      id: 3,
      title: "宇和島市→松山市 水産物配送",
      distance: "85.2km",
      price: "¥18,000",
      time: "2時間前",
      urgent: false,
      pickupTime: "18:00",
      deliveryTime: "19:45",
    },
  ]

  const NavigationMenu = () => (
    <div className="space-y-2">
      <Button
        variant={activeTab === "dashboard" ? "default" : "ghost"}
        className="w-full justify-start"
        onClick={() => setActiveTab("dashboard")}
      >
        <Truck className="w-4 h-4 mr-2" />
        ダッシュボード
      </Button>
      <Button
        variant={activeTab === "job-search" ? "default" : "ghost"}
        className="w-full justify-start"
        onClick={() => setActiveTab("job-search")}
      >
        <Search className="w-4 h-4 mr-2" />
        求車案件検索
      </Button>
      <Button
        variant={activeTab === "pricing" ? "default" : "ghost"}
        className="w-full justify-start"
        onClick={() => setActiveTab("pricing")}
      >
        <Calculator className="w-4 h-4 mr-2" />
        料金見積
      </Button>
      <Button
        variant={activeTab === "map" ? "default" : "ghost"}
        className="w-full justify-start"
        onClick={() => setActiveTab("map")}
      >
        <MapPin className="w-4 h-4 mr-2" />
        地図・位置情報
      </Button>
      <Button
        variant={activeTab === "communication" ? "default" : "ghost"}
        className="w-full justify-start"
        onClick={() => setActiveTab("communication")}
      >
        <MessageSquare className="w-4 h-4 mr-2" />
        コミュニケーション
      </Button>
      <Button
        variant={activeTab === "carrier-search" ? "default" : "ghost"}
        className="w-full justify-start"
        onClick={() => setActiveTab("carrier-search")}
      >
        <Users className="w-4 h-4 mr-2" />
        事業者検索
      </Button>
      <Button
        variant={activeTab === "registration" ? "default" : "ghost"}
        className="w-full justify-start"
        onClick={() => setActiveTab("registration")}
      >
        <Settings className="w-4 h-4 mr-2" />
        事業者登録
      </Button>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 px-4 py-3 lg:px-6 lg:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
              <Truck className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">赤帽プラットフォーム</h1>
              <p className="text-sm text-gray-500">総合配送マッチングシステム</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="hidden md:flex items-center space-x-2">
              <Badge
                variant={userType === "carrier" ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => setUserType("carrier")}
              >
                事業者
              </Badge>
              <Badge
                variant={userType === "shipper" ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => setUserType("shipper")}
              >
                荷主
              </Badge>
            </div>
            <Button variant="outline" size="sm">
              <Bell className="w-4 h-4 mr-2" />
              通知
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="sm" className="md:hidden">
                  <Menu className="w-4 h-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-64">
                <div className="py-4">
                  <NavigationMenu />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <div className="flex">
        <nav className="hidden md:block w-64 bg-white border-r border-gray-200 min-h-screen p-4">
          <NavigationMenu />
        </nav>

        <main className="flex-1 p-4 lg:p-6">
          {activeTab === "dashboard" && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">ダッシュボード</h2>
                <p className="text-gray-600">
                  {userType === "carrier" ? "赤帽事業者向けダッシュボード" : "荷主向けダッシュボード"}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {dashboardStats.map((stat, index) => (
                  <Card key={index}>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium text-gray-600">{stat.title}</CardTitle>
                      <stat.icon className="w-4 h-4 text-blue-600" />
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
                      <Search className="w-5 h-5 mr-2 text-blue-600" />
                      新着求車案件
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {recentJobs.map((job) => (
                        <div key={job.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                              <p className="text-sm font-medium text-gray-900">{job.title}</p>
                              {job.urgent && (
                                <Badge variant="outline" className="bg-red-100 text-red-700 border-red-200 text-xs">
                                  緊急
                                </Badge>
                              )}
                            </div>
                            <div className="flex items-center space-x-4 text-xs text-gray-500">
                              <span>{job.distance}</span>
                              <span>集荷: {job.pickupTime}</span>
                              <span>配送: {job.deliveryTime}</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold text-green-600">{job.price}</p>
                            <p className="text-xs text-gray-500">{job.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <Button className="w-full mt-4" onClick={() => setActiveTab("job-search")}>
                      すべての案件を見る
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Clock className="w-5 h-5 mr-2 text-green-600" />
                      今日の予定
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                        <div>
                          <p className="text-sm font-medium">14:30 - 集荷</p>
                          <p className="text-xs text-gray-600">松山市久米窪田町1-1</p>
                        </div>
                        <Badge variant="outline" className="bg-blue-100 text-blue-700">
                          進行中
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="text-sm font-medium">16:00 - 集荷予定</p>
                          <p className="text-xs text-gray-600">新居浜市一宮町1-1-1</p>
                        </div>
                        <Badge variant="outline" className="bg-gray-100 text-gray-700">
                          予定
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="text-sm font-medium">18:00 - 集荷予定</p>
                          <p className="text-xs text-gray-600">宇和島市弁天町1-1-1</p>
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

          {activeTab === "job-search" && <JobSearchComponent userType={userType} />}
          {activeTab === "pricing" && <PricingComponent />}
          {activeTab === "map" && <MapComponent />}
          {activeTab === "communication" && <CommunicationComponent />}
          {activeTab === "carrier-search" && <CarrierSearchComponent userType={userType} />}
          {activeTab === "registration" && <DriverRegistrationComponent />}
        </main>
      </div>
    </div>
  )
}
