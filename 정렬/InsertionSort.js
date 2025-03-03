//삽입 정렬 함수
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      //인덱스 j부터 1까지 1씩 감소하며 반복
      if (arr[j] < arr[j - 1]) {
        //swap하는 것이 한칸씩 왼쪽으로 이동하는 것과 같은 효과
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      } else {
        //자기보다 작은 데이터를 만나면 그 위치에서 멈춤
        break;
      }
    }
  }
}
