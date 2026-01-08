import { RegularPassenger, StudentPassenger } from "../passenger/passengerCreator.js"
import { RegularTicket, VipTicket } from "./ticketsCreator.js"
import { Flight } from "./flightCreator.js"

const flightsList = [['dubai', 'elal', 10, 780, 1000], ['london', 'easyget', 10, 450, 900], ['new york', 'elal', 10, 1250, 2500]]

class Airport {
    constructor() {
        this.flights = []
    }
    createFlight(flightList) {
        for (let i = 0; i < flightList.length; i++) {
            const flightToList = new Flight(flightList[i][0], flightList[i][1], flightList[i][2], flightList[i][3], flightList[i][4])
            for (let j = 0; j < Math.round(flightToList.maximumPassenger * 0.9); j++) {
                flightToList.insertTicket(new RegularTicket(flightToList.regularTicketPrice, "", flightToList.tickets.length + 1))

            }
            for (let k = 0; k < Math.round(flightToList.maximumPassenger * 0.1); k++) {
                flightToList.insertTicket(new VipTicket(flightToList.vipTicketPrice, "", flightToList.tickets.length + 1))
            }
            this.flights.push(flightToList)
        }
    }
    setTicketOwner(passenger,flightName,ticketNumber) {
        const flight = this.flights.findIndex(flight => flight.flightName === flightName)
        if (!flightName) throw new Error('no such flight')
        const ticket = this.flights[flight].findIndex(ticket => ticket.ticketNumber === ticketNumber)
        if (!ticket) throw new Error('ticket not found')
        this.flights[flight].tickets[ticket].ownerNmae = passenger.name
    }
}

const airport = new Airport()
airport.createFlight(flightsList)
const student = new StudentPassenger('itamar', 63, 8000, 'kodcod')
const regularPassenger = new RegularPassenger('david', 8, 6000, true)
const canBuy = student.buyTicket(airport.flights[0].tickets[0])
if (canBuy !== false) {
    airport.setTicketOwner(student,'london',1)
}


