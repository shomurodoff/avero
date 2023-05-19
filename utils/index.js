import dayjs from "dayjs";
import {floor, get, find,isEqual,filter} from "lodash"

export const getTimeDifference = (from, to) => {
    return `${floor(parseInt(dayjs(to).diff(dayjs(from), 'm')) / 60)}h, ${parseInt(dayjs(to).diff(dayjs(from), 'm')) - floor(parseInt(dayjs(to).diff(dayjs(from), 'm')) / 60) * 60}m`;
}

export const findCabinClassType = (list=[], type) => {
    return find(list, (_class) => isEqual(get(_class, 'type'), type)) || {}
}

export const filterSeatsByClassId = (seats=[],classList=[], type) => {
    return filter(seats,(seat)=>isEqual(get(seat,'cabinClassId'),get(findCabinClassType(classList,type),'id'))) || []
}

export const getSelectedServicesByServiceType = (services=[], type) => {
    return filter(services,(service)=>isEqual(get(service,'serviceType'),type)) || []
}