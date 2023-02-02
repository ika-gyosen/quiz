export const getCurrentTimeFileName = () => {
  // 生成されるファイル名に指定がない場合、ファイル名を一意にするために、現在時刻を使用する
  const currentTime = new Date();

  // 月日、時分秒が1桁の場合には先頭に0を配置して2桁にして返す
  // 月は、1月の場合0が返ってくるので1を加算する。
  const currentMonth =
    currentTime.getMonth() + 1 < 10 ? `0${currentTime.getMonth() + 1}` : `${currentTime.getMonth() + 1}`;
  const currentDate = currentTime.getDate() < 10 ? `0${currentTime.getDate()}` : currentTime.getDate();
  const currentHour = currentTime.getHours() < 10 ? `0${currentTime.getHours()}` : currentTime.getHours();
  const currentMinute = currentTime.getMinutes() < 10 ? `0${currentTime.getMinutes()}` : currentTime.getMinutes();
  const currentSecond = currentTime.getSeconds() < 10 ? `0${currentTime.getSeconds()}` : currentTime.getSeconds();
  // 年、月、日、時、分、秒をつなげてファイル名とする
  const defaultSqlFileName = `${currentTime.getFullYear()}${currentMonth}${currentDate}${currentHour}${currentMinute}${currentSecond}`;

  return defaultSqlFileName;
};
