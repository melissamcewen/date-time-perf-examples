import dayjs from "https://cdn.skypack.dev/dayjs@1.10.3"
import { DateTime } from "https://cdn.skypack.dev/luxon@1.25.0";
import { getHours } from "https://cdn.skypack.dev/date-fns@2.16.1";
const now = new Date()
const LuxonNow = DateTime.local()

// Luxon
// 1,653,100 ops/s
LuxonNow.hour

// Day.js
// 66,890 ops/s
dayjs(now).hour()

// JavaScript Date
// 2,343,090 ops/s
now.getHours();

// date-fns
// 317,900 ops/s
getHours(now)

