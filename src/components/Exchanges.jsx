import { Row, Col } from 'antd'
import React, { useState, useEffect } from 'react'
import axios from 'axios'


const Exchanges = () => {

  const [exchanges, setExchanges] = useState([])

  useEffect(() => {
    axios.get(`https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd/exchanges`).then(data => {
      setExchanges(data?.data)
    })
  }, [])

  return (
    <>
      <Row>
        <Col span={6}>Exchanges</Col>
        <Col span={6}>24h Trade volume</Col>
        <Col span={6}>Markets</Col>
        <Col span={6}>Change</Col>
      </Row>
    </>
  )
}

export default Exchanges