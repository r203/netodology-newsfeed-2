export const getNewsFeed = async () => {
  const response = await fetch('http://localhost:7070/api/news');
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return await response.json();
}

export const getNewsFeedLoadMore = async (lastId) => {
  const response = await fetch(`http://localhost:7070/api/news?lastSeenId=${lastId}`);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return await response.json();
}