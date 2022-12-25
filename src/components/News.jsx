const News = ({ news }) => {
  let dateFormat = new Date(news.date);
  let day = dateFormat.getDate();
  let month = dateFormat.getMonth() + 1;
  let hours = dateFormat.getHours();
  let minutes = dateFormat.getMinutes();

  return (
    <li>
      <div>{day}.{month} в {hours}:{minutes} </div>
      <div>{news.text}</div>
      <div className='wrap'>
        <div>Likes: {news.likes.count}</div>
        <div>Comments: {news.comments.count}</div>
        <div>Reposts: {news.reposts.count}</div>
        <div>Views: {news.views.count}</div>
      </div>

    </li>
  )
}

export default News;