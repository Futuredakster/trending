"use server";

export const fetchRedditContent = async () => {
  try {
    const response = await fetch('https://www.reddit.com/r/all/top.json?limit=10', {
      next: { revalidate: 60 }, // Revalidate every 60 seconds
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data.data.children.map((item: any) => item.data);
  } catch (error) {
    console.error('Failed to fetch Reddit content:', error);
    return [];
  }
}
    