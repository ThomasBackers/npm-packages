#!/usr/bin/env node
const [,, ...args] = process.argv
const axios = require('axios').default;
const {getCode} = require('country-list');

const currentYear = new Date().getFullYear()
const currentCode = getCode(...args)

const getHolidays = (year, code) => {
    axios.get(`https://date.nager.at/api/v2/PublicHolidays/${year}/${code}`).then(
        response => response.data.forEach(datum => {
            console.log(`${datum.date}: ${datum.name}`)
        })
    ).catch(
        error => console.log(error)
    )
}

getHolidays(currentYear, currentCode)
