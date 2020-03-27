import { FormValues } from '~/components/Form'

export enum ResultLevel {
  None,
  Low,
  Medium,
  High,
}

export const resultMessage: { [result in ResultLevel]: string } = {
  [ResultLevel.None]:
    'Nếu như bạn không có 1 trong những triệu chứng trên thì có khả năng bạn không bị nhiễm Covid-19, hãy tự theo dõi tình trạng sức khoẻ của bản thân, đo thân nhiệt 2 lần một ngày.',
  [ResultLevel.Low]:
    'Nếu chỉ bị sốt (dưới 2 ngày), hãy chủ động theo dõi sức khỏe của bản thân và lưu ý tình trạng sức khỏe của cả những người xung quanh. ' +
    'Bạn hãy tự cách ly tại nhà, kiểm tra thân nhiệt và uống thuốc hạ sốt nếu sốt trên 38,5°C.',
  [ResultLevel.Medium]:
    'Bạn hãy gọi cho bác sĩ khu vực hoặc gọi cấp cứu nếu tình trạng sức khỏe chuyển biến xấu (và trong trường hợp bác sĩ của bạn đã hết giờ làm việc).',
  [ResultLevel.High]: 'Bạn hãy gọi cho 155 và làm theo hướng dẫn của tổng đài.',
}

export const getResultLevel = ({
  breathing,
  fever,
  longFever,
  cough,
  old,
}: FormValues) => {
  if (
    breathing ||
    (fever && cough) ||
    (old && (breathing || fever || longFever || cough))
  ) {
    return ResultLevel.High
  } else if (fever || cough) {
    return ResultLevel.Medium
  } else if (fever && !longFever) {
    return ResultLevel.Low
  } else {
    return ResultLevel.None
  }
}
