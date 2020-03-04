const express = require("express")

const router = express.Router()

router.get("/", (req, res, next) => {
	res.json({
		message: "We're All Mad Here...",
	})
})

module.exports = router