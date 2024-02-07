import { Row, Col, Collapse, Typography, Avatar } from 'antd'
import React, { useState, useEffect } from "react"
import exchangesData from "../services/exchangesData.json"
import millify from 'millify'

const { Text } = Typography

const Exchanges = () => {
  const [exchanges, setExchanges] = useState([])

  useEffect(() => {
    setExchanges(exchangesData)
  }, [])

  return (
    <div style={{ height: "100vh"}}>
      <Row className='row-title-exchanges'>
        <Col span={6}>Exchanges</Col>
        <Col span={6}>24h Trade volume</Col>
        <Col span={6}>Markets</Col>
        <Col span={6}>Price</Col>
      </Row>
      <Row>
        {exchanges?.map((exchange) => (
          <Col  key={exchange.uuid} span={24}>
            <Collapse>
              <Collapse.Panel
                key={exchange.uuid}
                showArrow={false}
                header={(
                  <Row>
                    <Col span={6}>
                      <Text><strong>{exchange.rank}</strong></Text>
                      <Avatar className='exchange-image' src={exchange.iconUrl} />
                      <Text><strong>{exchange.name}</strong></Text>
                    </Col>
                    <Col span={6}>${millify(exchange.v24hVolume)}</Col>
                    <Col span={6}>{millify(exchange.numberOfMarkets)}</Col>
                    <Col span={6}>${millify(exchange.price)}</Col>
                  </Row>
                )}
              >
                {exchange.description}
              </Collapse.Panel>
            </Collapse>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default Exchanges