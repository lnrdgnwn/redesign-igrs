const API_BASE = import.meta.env.VITE_API_URL;

export async function fetchRatings() {
  const response = await fetch(`${API_BASE}/ratings`);
  if (!response.ok) {
    throw new Error(`Gagal mengambil data rating: ${response.statusText}`);
  }
  const result = await response.json();
  return result.data;
}

export async function fetchRatingById(id) {
  const response = await fetch(`${API_BASE}/ratings/${id}`);
  if (!response.ok) {
    throw new Error(`Gagal mengambil data rating: ${response.statusText}`);
  }
  const result = await response.json();
  return result.data;
}

export async function fetchGames() {
  const response = await fetch(`${API_BASE}/games`);
  if (!response.ok) {
    throw new Error(`Gagal mengambil data game: ${response.statusText}`);
  }
  const result = await response.json();
  return result.data;
}

export async function fetchGameBySlug(slug) {
  const response = await fetch(`${API_BASE}/games/${slug}`);
  if (!response.ok) {
    throw new Error(`Gagal mengambil data game: ${response.statusText}`);
  }
  const result = await response.json();
  return result.data;
}

export async function fetchBlogs() {
  const response = await fetch(`${API_BASE}/blogs`);
  if (!response.ok) {
    throw new Error(`Gagal mengambil data blog: ${response.statusText}`);
  }
  const result = await response.json();
  return result.data;
}

export async function fetchBlogBySlug(slug) {
  const response = await fetch(`${API_BASE}/blogs/${slug}`);
  if (!response.ok) {
    throw new Error(`Gagal mengambil data blog: ${response.statusText}`);
  }
  const result = await response.json();
  return result.data;
}

export async function fetchContentClassifications() {
  const response = await fetch(`${API_BASE}/content-classifications`);
  if (!response.ok) {
    throw new Error(`Gagal mengambil data klasifikasi: ${response.statusText}`);
  }
  const result = await response.json();
  return result.data;
}
