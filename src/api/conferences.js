const url = 'http://localhost:9090/services/conferences';

const conferences = {};

conferences.get = async () => {
  const res = await fetch(url);
  if (res.status !== 200) return [];
  return await res.json();
}

conferences.name = {};

conferences.name.get = async name => {
  const res = await fetch(`${url}/${name}`);
  if (res.status !== 200) return {};
  return await res.json();
}

export default conferences;