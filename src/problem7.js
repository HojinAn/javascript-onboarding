/**
 * Problem 7
 * 1. friends를 순회하며 각 친구 관계를 key, value & value, key로 저장(value는 array)
 * 2. 각 key 값에 대해 방문 여부 위한 visited object, score Map 생성
 * 3. user를 기준으로 dfs 수행 -> depth 2일 경우 score Map의 값 + 10
 * 4. visitors를 순회하며 score Map의 점수 + 1
 * 5. score Map -> array 변환
 * 6. 정렬한 array 정렬(점수 기준, 동일할 경우 이름 순)
 * 7. array의 index 0만 반환
 * @제한사항 아이디는 소문자로만, 동일 관계 중복 없음, 추천 친구 반드시 존재
 * @param {string} user 1 이상 30 이하
 * @param {[string, string][]} friends 1 이상 10,000 이하
 * @param {string[]} visitors 0 이상 10,000 이하
 * @returns {string[]}
 */
function problem7(user, friends, visitors) {
  const pairMap = friends.reduce((dict, [u, v]) => {
    dict.set(u, (dict.get(u) ?? []).concat(v));
    dict.set(v, (dict.get(v) ?? []).concat(u));
    return dict;
  }, new Map());
  var answer;
  return answer;
}

module.exports = problem7;
