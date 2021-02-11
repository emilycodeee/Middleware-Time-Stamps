# Middleware-Time-Stamps

## Features - 功能描述
- 可以記錄伺服器收到來自瀏覽器的request 資訊到 server log 
- 紀錄request當下時間、請求的HTTP方法、URL
- 紀錄從request至response所花費的時間

## 環境建置與需求 (prerequisites)
```
Node.js 10.15.0
```
## 安裝與執行步驟 (installation and execution)

**1. 將本專案存放至本機(下列方法2擇1)**
  - 打開終端機輸入 git clone https://github.com/emilycodeee/Middleware-Time-Stamps.git
  - 點選 Download ZIP 下載

**2. 進入專案資料夾(Middleware-Time-Stamps)使用終端機安裝相關套件**

```
npm install
```
**3. 使用nodemon，啟動專案伺服器**
```
npm run dev
```
**4. 終端機出現下列字串代表伺服器成功啟動**

Express is listening on http://localhost:3000

**5. 輸入相關網址查看server log回應**
```
http://localhost:3000/ 
http://localhost:3000/new 
http://localhost:3000/:id
```

## 環境建置

- Node.js v14.15.1 -執行環境
- Express v4.17.1 -框架