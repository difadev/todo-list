import {pgTable, serial} from 'drizzle-orm/pg-core'

export const bids = pgTable("bid_place", {
    id: serial('id').primaryKey(),

})