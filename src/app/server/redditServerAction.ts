"use server";

export const fetchRedditContent = async () => {
  try {
    const response = await fetch('https://www.reddit.com/r/all/top.json?limit=10', {
      headers: {
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0 Safari/537.36',
  'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
  'Accept-Language': 'en-US,en;q=0.5',
  'Referer': 'https://www.reddit.com/',
  'Connection': 'keep-alive'
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
