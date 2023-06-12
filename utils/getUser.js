
import { getJWT } from './auth';

async function getUser(url) {
  const { jwt } = await getJWT();
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });
  const data = await response.json();

  return data;
}

export default getUser;
