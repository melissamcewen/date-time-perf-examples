import { format } from "https://cdn.skypack.dev/date-fns@2.16.1"
import dayjs from "https://cdn.skypack.dev/dayjs@1.10.3"
import { DateTime } from "https://cdn.skypack.dev/luxon@1.25.0"
const now = new Date()
const nowLuxon = DateTime.local()

// date-fns
// 3,995 ops/s
format(now, "EEEE',' MMMM d',' ha")

// Luxon
// 3,140 ops/s
nowLuxon.toFormat("EEEE',' MMMM d',' ha")

// Day.js
// 17,280 ops/s
dayjs(now).format("dddd, MMMM D, ha")



