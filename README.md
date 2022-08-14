# URL Shortener(短網址產生器)
![URL Shortener page](./public/URL%20shortener.png)
這是一個使用 express 與 Node.js 打造的短網址產生器

## Features
- 使用者可以在首頁畫面的表單貼上想要縮短的網址
- 使用者在送出表單之後，表單下方會回傳格式化後的短網址
- 使用者可以一鍵複製產出的短網址連結
- 使用者在伺服器啟動期間，可以在瀏覽器的網址列輸入產出的短網址，瀏覽器就會導向原始的網站

## Prerequisites
- Node.js 16.15.1
- Express 4.18.1
- Express-Handlebars 4.0.2
- Bootstrap 5.13.1
- mongoose 5.13.14
- body-parser 1.20.0
- MongoDB

## Installing
1. 打開終端機（terminal）並 Clone 專案至本機

```
$ git clone https://github.com/darrenjon/URL-Shortener.git
```

2. 進入存放此專案的資料夾

```
$ cd url-shortener
```

3. 安裝 npm 及專案所需的套件

```
$ npm install
```

4. 開啟伺服器，執行 app.js 檔案

```
$ npm run dev
```

5. 當 terminal 出現以下字樣，表示伺服器已啟動完成

`App is running on http://localhost:3000`
`mongodb connected!`

6. 打開瀏覽器網址列輸入 http://localhost:3000/
可以看到本專案的網頁呈現