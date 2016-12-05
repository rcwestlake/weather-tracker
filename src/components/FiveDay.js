import React, { Component } from 'react'
import { Link } from 'react-router'
import convertKelvinToFahrenheit from './helpers/temp-conversion'

class FiveDay extends Component {

  getMinAndMax(arr, day) {
    const temps = day.map((hour) => {
      return arr.push(Math.floor(convertKelvinToFahrenheit(hour.temp)))
    })
  }

  render() {
    let data
    const { state, id } = this.props

    if (state.getFiveDayForecast[id]) {
      const one = []
      const two = []
      const three = []
      const four = []

      const a = state.getFiveDayForecast[id].forecast.a
      const b = state.getFiveDayForecast[id].forecast.b
      const c = state.getFiveDayForecast[id].forecast.c
      const d = state.getFiveDayForecast[id].forecast.d

      this.getMinAndMax(one, a)
      this.getMinAndMax(two, b)
      this.getMinAndMax(three, c)
      this.getMinAndMax(four, d)

      data = (
        <div>
          <ul>
            <li>{state.getFiveDayForecast[id].forecast.a[id].day}</li>
            <li>{state.getFiveDayForecast[id].forecast.b[id].day}</li>
            <li>{state.getFiveDayForecast[id].forecast.c[id].day}</li>
            <li>{state.getFiveDayForecast[id].forecast.d[id].day}</li>
          </ul>
          <ul>
            <li>{Math.max(...one)}&deg; / {Math.min(...one)}&deg;</li>
            <li>{Math.max(...two)}&deg; / {Math.min(...two)}&deg;</li>
            <li>{Math.max(...three)}&deg; / {Math.min(...three)}&deg;</li>
            <li>{Math.max(...four)}&deg; / {Math.min(...four)}&deg;</li>
          </ul>
          <button><Link to={`/Extended/${state.getCurrentWeatherByZip[id].location}/${id}`}>View Extended Forecast</Link></button>
        </div>
      )
    } else {
      data = (
        <h2>Loading...</h2>
      )
    }
    return (
      <div>
        {data}
      </div>
    )
  }
}

export default FiveDay