import dayjs from "dayjs";
import {floor} from "lodash"

export const getTimeDifference = (from, to) => {
    return `${floor(parseInt(dayjs(to).diff(dayjs(from), 'm')) / 60)}h, ${parseInt(dayjs(to).diff(dayjs(from), 'm')) - floor(parseInt(dayjs(to).diff(dayjs(from), 'm')) / 60) * 60}m`;
}