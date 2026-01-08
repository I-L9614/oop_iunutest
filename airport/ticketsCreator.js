class Ticket {
    constructor(ticketPrice, ownerName, ticketNumber) {
        this.ticketPrice = ticketPrice
        this.ownerName = ownerName
        this.ticketNumber = ticketNumber
    }


}


export class RegularTicket extends Ticket {

}


export class VipTicket extends Ticket {
    constructor(ticketPrice, ownerName, ticketNumber) {
        super(ticketPrice, ownerName, ticketNumber)
        this.benefitsList = ['Free alcohol', 'Free food', 'Hot towels']
    }
}

