import News from "./News";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { newsFeedRequest, newsFeedLoadMoreRequest } from '../redux/newsFeedSlice'

const NewsFeed = () => {
  const { newsFeed, loading, error, lastId, isEnding } = useSelector((state) => state.newsFeed);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(newsFeedRequest())
  }, [dispatch])

  let handleLoadMore = (lastId) => {
    if (lastId) {
      dispatch(newsFeedLoadMoreRequest(lastId))
    }
  }

  return (
    <>
      <ul>
        {newsFeed.map(news => {
          return (
            <News key={news.id} news={news} />
          )
        })}
      </ul>
      <div className="footer">
        {loading && <span className="loading">Loading...</span>}
        {error && <span className="error">Error! Try again later...</span>}
        {!isEnding && <button onClick={() => handleLoadMore(lastId)}>Load more...</button>}
      </div>
    </>
  )
}

export default NewsFeed;