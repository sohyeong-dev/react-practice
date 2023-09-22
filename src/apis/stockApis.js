import axios from "axios";

const SERVER_HOST = "http://localhost:3001"

/**
 * 해외 주식 이벤트 리스트 GET API 호출
 */
export const getGlobalStockEventList = async () => {
  const response = await axios.get(`${SERVER_HOST}/globalStockEvents`);
  return response.data;
}