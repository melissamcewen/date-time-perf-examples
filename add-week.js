import { add } from "https://cdn.skypack.dev/date-fns@2.16.1"
import dayjs from "https://cdn.skypack.dev/dayjs@1.10.3"
import { DateTime } from "https://cdn.skypack.dev/luxon@1.25.0"
const now = new Date();
const nowLuxon = DateTime.local()

// JavaScript date
// 650,305 ops/s
now.setDate(now.getDate() + 7)

// date-fns
// 155,895 ops/s
add(now, {days: 7})

// Luxon
// 1,250 ops/s
nowLuxon.plus({days: 7})

// Day.js
// 15,205 ops/s
dayjs(now).add(7, 'day')
