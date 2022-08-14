const express = require('express')
const router = express.Router()
const generateUrl = require('../../generate_url')
const shortUrl = require('../../models/url')

router.get('/', (req, res) => {
  res.render('index')
})

//shorten the long URL
router.post('/', (req, res) => {
  const original = req.body.url
  const host = req.headers.origin
  const newUrl = generateUrl()
  shortUrl.findOne({ original })
    .lean()
    .then(data => {
      if (data) {
        return res.render('index', { host, newUrl: data.newUrl, original })
      } else {
        //create new URL to database and render data
        shortUrl.create({ original, newUrl })
        res.render('index', { host, newUrl, original })
      }
    })
    .catch(error => console.log(error))
})

//short URL redirects to the actual URL destination
router.get("/:newUrl", (req, res) => {
  const newUrl = req.params.newUrl
  shortUrl.findOne({ newUrl })
    .lean()
    .then(data => {
      if (data) return res.redirect(data.original)
    })
    .catch(error => console.log(error))
})

module.exports = router