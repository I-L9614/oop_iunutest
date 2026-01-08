import { RegularTicket,VipTicket } from "../airport/ticketsCreator.js"
class Passenger {
    constructor(name, id, amount) {
        this.name = name
        this.id = id
        this.amount = amount
    }
}


export class StudentPassenger extends Passenger {
    constructor(name, id, amount, school) {
        super(name, id, amount)
        this.school = school
    }
    buyTicket(ticket) {
        if (ticket instanceof RegularTicket) {
            if ((ticket.ticketPrice * 0.9) > this.amount) {
                return false
            }
            else {
                this.amount = this.amount - (ticket.ticketPrice * 0.9)
            }
        }
        if (ticket instanceof VipTicket) {
            if (ticket.ticketPrice > this.amount) {
                return false
            }
            else {
                this.amount = this.amount - ticket.ticketPrice
            }
        }
    }
}

export class RegularPassenger extends Passenger {
    constructor(name, id, amount, knows) {
        super(name, id, amount)
        this.knows = knows
    }
    buyTicket(ticket) {
        if (this.knows === true) {
            if (ticket instanceof RegularTicket) {
                if ((ticket.ticketPrice * 0.8) > this.amount) return false
                else {
                    this.amount = this.amount - (ticket.ticketPrice * 0.8)
                }
            }
            if (ticket instanceof VipTicket) {
                if ((ticket.ticketPrice * 0.85) > this.amount) return false
                else {
                    this.amount = this.amount - (ticket.ticketPrice * 0.85)
                }
            }
        }
        else {
            if (ticket.ticketPrice > this.amount) return false
            else {
                this.amount = this.amount - ticket.ticketPrice
            }
        }
    }
}

