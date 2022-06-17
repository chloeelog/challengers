import dayjs from "dayjs";
import "dayjs/locale/ko";

export function formatDate(date: string) {
  return dayjs(date).locale("ko").format("M월 D일 (ddd)")
}