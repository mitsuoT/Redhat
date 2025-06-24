"use client"

import { useState } from "react"

const Pricing = () => {
  // 料金計算のサンプルデータを愛媛県の距離・地域に合わせて更新
  const [routes] = useState([
    {
      id: 1,
      from: "松山市",
      to: "今治市",
      distance: "42km",
      basePrice: 8500,
      estimatedTime: "55分",
    },
    {
      id: 2,
      from: "松山市",
      to: "新居浜市",
      distance: "65km",
      basePrice: 12000,
      estimatedTime: "1時間15分",
    },
    {
      id: 3,
      from: "松山市",
      to: "宇和島市",
      distance: "85km",
      basePrice: 15000,
      estimatedTime: "1時間30分",
    },
  ])

  // 地域別料金設定を愛媛県版に更新
  const areaRates = {
    松山市内: { base: 3000, perKm: 150 },
    今治市内: { base: 2800, perKm: 140 },
    新居浜市内: { base: 2800, perKm: 140 },
    県内近距離: { base: 5000, perKm: 180 },
    県内長距離: { base: 8000, perKm: 200 },
  }

  return (
    <div>
      <h2>料金について</h2>
      {/* Routes Table */}
      <h3>主要ルート</h3>
      <table>
        <thead>
          <tr>
            <th>出発地</th>
            <th>目的地</th>
            <th>距離</th>
            <th>基本料金</th>
            <th>所要時間</th>
          </tr>
        </thead>
        <tbody>
          {routes.map((route) => (
            <tr key={route.id}>
              <td>{route.from}</td>
              <td>{route.to}</td>
              <td>{route.distance}</td>
              <td>{route.basePrice}</td>
              <td>{route.estimatedTime}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Area Rates Table */}
      <h3>地域別料金</h3>
      <table>
        <thead>
          <tr>
            <th>地域</th>
            <th>基本料金</th>
            <th>1kmあたりの料金</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(areaRates).map(([area, rates]) => (
            <tr key={area}>
              <td>{area}</td>
              <td>{rates.base}</td>
              <td>{rates.perKm}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Pricing
