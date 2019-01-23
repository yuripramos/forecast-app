export default function getQueryParam(location, param) {
  if (location && location.search) {
    const result = location.search.match(
      new RegExp("(\\?|&)" + param + "(\\[\\])?=([^&]*)")
    );

    return result ? result[3] : false;
  }
  return false;
}
