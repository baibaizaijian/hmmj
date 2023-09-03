const Key = 'hemamianjing'
export const setToken = token => localStorage.setItem(Key, token)

export const getToken = () => localStorage.getItem(Key)

export const delToken = () => localStorage.removeItem(Key)
