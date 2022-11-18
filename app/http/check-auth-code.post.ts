export function invokeCheckAuthToken(context) {
  const { authtoken } = context;

  return fetch('http://localhost:8080/api/v1/auth/check-authtoken', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      authtoken: authtoken,
    }),
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error(error);
    });
}
