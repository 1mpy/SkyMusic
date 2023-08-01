async function getTracks() {
  const response = await fetch(
    'https://painassasin.online/catalog/track/all/',
    {
      method: 'GET',
    }
  )
  if (!response.ok) {
    throw new Error('Ошибка сревера')
  }
  const data = await response.json()
  return data
}

export default getTracks

export function registerUser({ email, password, username }) {
  return fetch('https://painassasin.online/user/signup/', {
    method: 'POST',
    body: JSON.stringify({
      email,
      password,
      username,
    }),
    headers: {
      // API требует обязательного указания заголовка content-type, так апи понимает что мы посылаем ему json строчку в теле запроса
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .then((response) => {
      if (response.status === 400) {
        throw new Error("");
      }
      if (response.status === 500) {
        throw new Error("Сервер сломался");
      }
      return response.json();
    });
}
// {            400
//   "username": ["Пользователь с таким именем уже существует."],
//   "email": ["Пользователь с таким адрес электронной почты уже существует."],
//   "password": [
//     "Введённый пароль слишком короткий. Он должен содержать как минимум 8 символов.",
//     "Введённый пароль слишком широко распространён.",
//     "Введённый пароль состоит только из цифр."
//   ]
// }



export function loginUser({ email, password }) {
  return fetch('https://painassasin.online/user/login/', {
    method: 'POST',
    body: JSON.stringify({
      email,
      password,
    }),
    headers: {
      // API требует обязательного указания заголовка content-type, так апи понимает что мы посылаем ему json строчку в теле запроса
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .then((response) => {
      if (response.status === 400) {
        throw new Error("");
      }
      if (response.status === 500) {
        throw new Error("Сервер сломался");
      }
      if (response.status === 401) {
        throw new Error("Пользователь с таким email или паролем не найден");
      }
      return response.json();
    });
}


// {                      400
//   "username": ["Пользователь с таким именем уже существует."],
//   "email": ["Пользователь с таким адрес электронной почты уже существует."],
//   "password": [
//     "Введённый пароль слишком короткий. Он должен содержать как минимум 8 символов.",
//     "Введённый пароль слишком широко распространён.",
//     "Введённый пароль состоит только из цифр."
//   ]
// }

//                      401
// { "detail": "Пользователь с таким email или паролем не найден" }