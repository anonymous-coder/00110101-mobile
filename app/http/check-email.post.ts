export function invokeCheckEmail(context) {
  console.log('invokeCheckEmail');
  const { email } = context;

  return fetch('http://localhost:8080/api/v1/auth/check-email', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email,
    }),
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error(error);
    });
}
