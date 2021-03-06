import React, { Component } from 'react'
import { connect } from 'react-redux'
import { receiveLocation, promptUser } from '../actions/index'
import Header from '../components/Header'

const mapStateToProps = (state) => ({
  state,
})

export default connect(mapStateToProps)(Header)
