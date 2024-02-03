import React, { useEffect, useState } from 'react'
import { Select, Typography, Row, Col, Avatar, Card } from 'antd'
import moment from 'moment'

const { Text, Title } = Typography
const { Option } = Select


const posts = [
  {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
    },
    {
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
    "userId": 1,
    "id": 3,
    "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    "body": "et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut"
    },
    {
    "userId": 1,
    "id": 4,
    "title": "eum et est occaecati",
    "body": "ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit"
    },
    {
    "userId": 1,
    "id": 5,
    "title": "nesciunt quas odio",
    "body": "repudiandae veniam quaerat sunt sed alias aut fugiat sit autem sed est voluptatem omnis possimus esse voluptatibus quis est aut tenetur dolor neque"
    },
    {
    "userId": 1,
    "id": 6,
    "title": "dolorem eum magni eos aperiam quia",
    "body": "ut aspernatur corporis harum nihil quis provident sequi mollitia nobis aliquid molestiae perspiciatis et ea nemo ab reprehenderit accusantium quas voluptate dolores velit et doloremque molestiae"
    },
]

const News = ({ simplified }) => {

  const [news, setNews] = useState([])

  // useEffect(() => {
  //   let url = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${process.env.REACT_APP_NEWSAPI_KEY}`

  //   fetch(url).then(response => response.json()).then(data => setNews(data?.articles?.slice(0, 30)))
  // }, [])

  // console.log(news)

  //to finish when api max requests per day is restarted

  if(!news) return 'Loading...'

  return (
    <Row gutter={[ 24, 24]}>
      {posts.map((article) => (
        <Col key={article.id} xs={24} sm={12} lg={8}>
          <Card hoverable className='news-card'>
            {/* <a href={article.url} target='_blank' rel="noreferrer"> */}
              <div className='news-image-container'>
                <Title className='news-title' level={4}>
                  {article.title}
                </Title>
              </div>
            {/* </a> */}
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default News