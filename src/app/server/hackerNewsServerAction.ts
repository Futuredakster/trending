"use server"


export const fetchHackerNewsContent = async () => {
  try {
    const response = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty', {
      next: { revalidate: 60 }, // Revalidate every 60 seconds
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const topStoryIds = await response.json();
    const topStories = await Promise.all(
      topStoryIds.slice(0, 10).map(async (id: number) => {
        const storyResponse = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`);
        return storyResponse.json();
      })
    );

    return topStories;
  } catch (error) {
    console.error('Failed to fetch Hacker News content:', error);
    return [];
  }
}