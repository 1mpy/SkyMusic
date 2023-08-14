async function getTracks() {
  const response = await fetch(
    'https://painassasin.online/catalog/track/all/',
    {
      method: 'GET',
    }
  )
  if (!response.ok) {
    throw new Error('Ошибка сервера')
  }
  const data = await response.json()
  return data
}
export default getTracks

export async function registerUser(email, password, username) {
  // console.log(email)
  // console.log(password)
  // console.log(username)
  const response = await fetch('https://painassasin.online/user/signup/', {
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
  if (response.ok) {
    const data = await response.json()
    return data
  }
  if (response.status === 400) {
    const data = await response.json()
    // console.log(data)
    if (data?.email) {
      throw new Error(data.email[0])
    }
    if (data?.password) {
      throw new Error(data.password[1])
    }
    throw new Error('Проверьте введенные данные')
  }
  if (response.status === 500) {
    throw new Error('Сервер сломался')
  }
  return null
}

export async function loginUser(email, password) {
  // console.log(email)
  // console.log(password)
  // console.log(username)
  const response = await fetch('https://painassasin.online/user/login/', {
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
  if (response.ok) {
    const data = await response.json()
    return data
  }
  if (response.status === 400) {
    const data = await response.json()
    // console.log(data)
    if (data?.email) {
      throw new Error(data.email[0])
    }
    if (data?.password) {
      throw new Error(data.password[1])
    }
    throw new Error('Проверьте введенные данные')
  }
  if (response.status === 500) {
    throw new Error('Сервер сломался')
  }
  return null
}

function saveToken(token) {
  sessionStorage.setItem('tokenData', JSON.stringify(token))
}

function getTokenData(login, password) {
  return fetch('https://painassasin.online/user/token/', {
    method: 'POST',
    body: JSON.stringify({
      email: email,
      password: password,
    }),
    headers: {
      'content-type': 'application/json',
    },
  })  
}
