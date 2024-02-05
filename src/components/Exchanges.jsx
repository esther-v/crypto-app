import { Row, Col } from 'antd'
import React from 'react'

const Exchanges = () => {
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