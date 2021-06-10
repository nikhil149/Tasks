const date = require('../models/calender')

exports.calendar = (req, res)=>{
    const data = req.body
    const dat = parseInt(data.day)
    const month = parseInt(data.month)
    const year = parseInt(data.year)

    // Get week day on requested date
    const Day = new Date(year, month - 1, dat).toLocaleString("en-US", {
        weekday: "long",
      });
    //   console.log(Day)
    return res.json({
        Day
        
    })
}