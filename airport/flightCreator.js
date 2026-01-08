export class Flight {
    constructor(flightName, airLine, maximumPassenger, regularTicketPrice, vipTicketPrice) {
        this.flightName = flightName
        this.airLine = airLine
        this.maximumPassenger = maximumPassenger
        this.regularTicketPrice = regularTicketPrice
        this.vipTicketPrice = vipTicketPrice
        this.tickets = []
    }
    insertTicket(ticket) {
        this.tickets.push(ticket)
    }
}

