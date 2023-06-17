export async function callAPIs(route: string) {
  const domain = 'http://localhost:4242/api/';

  console.log(domain + route);

  return await fetch(domain + route, {
    cache: 'no-store',
  })
    .then((data) => data.json())
    .catch((error) => {
      console.log('Error :', error);
    });
}
