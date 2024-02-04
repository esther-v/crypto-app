import React, { useEffect, useState } from 'react'
import { Typography, Row, Col, Card } from 'antd'
import moment from 'moment'

const { Text, Title } = Typography

const News = ({ simplified }) => {

  const [news, setNews] = useState([])
  const demoImg = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News'

  useEffect(() => {
    let url = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${process.env.REACT_APP_NEWSAPI_KEY}`

    fetch(url).then(response => response.json()).then(data => setNews(data?.articles?.slice(0, 10)))
  }, [])

  if(!news) return 'Loading...'

  return (
    <Row gutter={[ 24, 24]}>
      {news.map((article) => (
        <Col key={article.id} xs={24} sm={12} lg={8}>
          <Card hoverable className='news-card'>
            <a href={article.url} target='_blank' rel="noreferrer">
              <div className='news-image-container'>
                <Title className='news-title' level={4}>
                  {article.title}
                </Title>
                <img src={article.urlToImage || demoImg} alt="news-crypto" style={{ width: "100px", height: "100px", objectFit: "cover"}} />
              </div>
              <p>
                {article.description > 100 
                  ? `${article.description.substring(0, 100)}...`
                  : article.description
                }
              </p>
              <div>
                <p>By {article.author}</p>
                <Text>{moment(article.publishedAt).startOf('ss').fromNow()}</Text>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default News