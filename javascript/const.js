// アメダスの表示地点
// codeにAPIから渡ってくるキーを設定した上で項目を追加するとナウキャストページに表示される地点として反映
export const locations = [
  { code: '34392', name: 'sendai', displayName: '仙台' },
  { code: '34311', name: 'nikkawa', displayName: '新川' }
]
// アメダス情報の表示内容
// nameにAPIから渡ってくるキーを設定した上で項目を追加するとナウキャストページに反映
export const columns = [
  { name: 'temp', displayName: '温度', count: '℃' },
  { name: 'humidity', displayName: '湿度', count: '%' },
  { name: 'precipitation1h', displayName: '1時間降水量', count: 'mm' },
  { name: 'wind', displayName: '風速', count: 'm/s' },
  { name: 'windDirection', displayName: '風向', count: '方位' }
]
// 16方位の対応表
export const direction = [
  { code: 0, displayName: '北' },
  { code: 1, displayName: '北北東' },
  { code: 2, displayName: '北東' },
  { code: 3, displayName: '東北東' },
  { code: 4, displayName: '東' },
  { code: 5, displayName: '東南東' },
  { code: 6, displayName: '東南' },
  { code: 7, displayName: '南南東' },
  { code: 8, displayName: '南' },
  { code: 9, displayName: '南南西' },
  { code: 10, displayName: '南西' },
  { code: 11, displayName: '西南西' },
  { code: 12, displayName: '西' },
  { code: 13, displayName: '西北西' },
  { code: 14, displayName: '北西' },
  { code: 15, displayName: '北北西' },
]
