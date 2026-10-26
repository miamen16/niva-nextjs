const WORDPRESS_API_URL = "https://ourclimateourcommunity.org/wp-json/wp/v2";

export async function getExplainers(limit = 4) {
  const endpoint = `${WORDPRESS_API_URL}/explainer?_embed&per_page=${limit}`;

  try {
    const response = await fetch(endpoint, {
      next: { revalidate: 300 },
      headers: { Accept: "application/json" },
    });

    if (!response.ok) {
      throw new Error(`WordPress API returned ${response.status}`);
    }

    const data = await response.json();
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Unable to fetch WordPress explainers:", error);
    return [];
  }
}

export function getFeaturedImage(post) {
  return post?._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null;
}

export function getPlainText(html = "") {
  return html
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&#8217;|&#8216;/g, "'")
    .replace(/&#8220;|&#8221;/g, '"')
    .replace(/&amp;/g, "&")
    .replace(/&#8230;/g, "…")
    .replace(/\s+/g, " ")
    .trim();
}
