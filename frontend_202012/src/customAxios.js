import axios from "axios"; //엑시오스

export default function customAxios(url, callback) {
  axios({
    url: "/api" + url,
    method: "post",

    /**
     * 개발 환경에서의 크료스 도메인 이슈를 해결하기 위한 코드로
     * 운영 환경에 배포할 경우 15~16
     */
    baseURL: "http://localhost:8282",
    withCredentials: true,
  }).then(function (response) {
    callback(response.data);
  });
}
