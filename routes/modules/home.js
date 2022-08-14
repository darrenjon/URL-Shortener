const express = require('express')
const router = express.Router()
const generateUrl = require('../../generate_url')
const shortUrl = require('../../models/url')

router.get('/', (req, res) => {
  res.render('index')
})

router.post('/', (req, res) => {
  const original = req.body.url
  const newUrl = generateUrl()
  res.render('index', { original, newUrl })
})

// 匯出路由模組
module.exports = router