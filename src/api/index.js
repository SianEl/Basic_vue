import axios from 'axios';

function create(baseUrl, options) {
  // Object.assign(obj1, obj2) => obj1 안에 obj2내용 추가
  const instance = axios.create(Object.assign({ baseURL: baseUrl }, options));
  return instance;
}

export const posts = create(`${import.meta.env.TEST_APP_API_URL}/posts`);
// http://localhost:5000/posts -> 개발용 API 주소
// http://localhost:5001/posts' -> 운영용 API 주소
