
import { zonedTimeToUtc, utcToZonedTime } from "https://cdn.skypack.dev/date-fns-tz"
import { DateTime } from "https://cdn.skypack.dev/luxon@1.25.0"

const now = new Date();
const nowLuxon = DateTime.local()



// date-fns
// 27,153 ops/s
utcToZonedTime(now,  "Australia/Lord_Howe")

// Luxon
// 16,879 ops/s
nowLuxon.setZone('Australia/Lord_Howe')

