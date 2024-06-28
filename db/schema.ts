import {pgTable, serial} from 'drizzle-orm/pg-core'

export const bids = pgTable("todo_list_new", {
    id: serial('id').primaryKey(),

})