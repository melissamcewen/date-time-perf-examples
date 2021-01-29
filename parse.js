import { parse } from "https://cdn.skypack.dev/date-fns@2.16.1"
import dayjs from "https://cdn.skypack.dev/dayjs@1.10.3"
import { DateTime } from "https://cdn.skypack.dev/luxon@1.25.0"
const now = new Date()
const toParse = "Jul 8, 2005"


// Luxon
// 1,364 ops/s
DateTime.fromFormat(toParse, 'MMM d, y').toJSDate()


// Day.js
//324,484 ops/s
dayjs(toParse)


// JavaScript Date
// 998,928 ops/s
new Date(Date.parse(toParse))


// date-fns
// 7,544 ops/s
parse(toParse, "MMM d, y", new Date())
