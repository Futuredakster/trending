"use server";

export const fetchRedditContent = async () => {
  try {
    const response = await fetch('https://www.reddit.com/r/all/top.json?limit=10', {
      headers: {
        'User-Agent': 'MyNextJSApp/1.0',
      },
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      const text = await response.text();  // get error response body
      console.error(`Reddit fetch failed: ${response.status} - ${text}`);
      throw new Error(`Network response was not ok: ${response.status}`);
    }

    const data = await response.json();
    return data.data.children.map((item: any) => item.data);
  } catch (error) {
    console.error('Failed to fetch Reddit content:', error);
    return [];
  }
}
