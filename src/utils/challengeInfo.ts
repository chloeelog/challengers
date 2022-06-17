import dayjs from "dayjs";
import dayOfYear from "dayjs/plugin/dayOfYear";

dayjs.extend(dayOfYear)

export function challengeStartDateInfo(startDate: string) {
  const startsAfter = dayjs().dayOfYear() - dayjs(startDate).dayOfYear();

  if (startsAfter < 0) return "모집 종료";
  if (startsAfter === 0) return "오늘부터 시작";
  if (startsAfter === 1) return "내일부터 시작";
  if (startsAfter === 2) return "모레부터 시작";
  return `${startsAfter}일 뒤 시작`;
}

export function challengeDurationInfo(startDate: string, endDate: string) {
  const durationDays = dayjs(endDate).dayOfYear() - dayjs(startDate).dayOfYear();
  const durationWeeks = Math.ceil(durationDays / 7);

  if (durationWeeks < 2) return "";
  return `${durationWeeks}주 동안`;
}