//스스로 구구단 코드 구현//

// 최종 요구사항
// 참고자료, 교재, 인터넷의 도움 없이 백지 상태에서 구구단을 구현한다.
// 사용자가 입력한 값에 따라 크기가 다른 구구단을 계산해 출력한다.
// 예를 들어 사용자가 “8,7”과 같은 문자열을 입력하면 팔칠단을 구현한다. 팔칠단은 2 * 1 … 2 * 7, 3 * 1 … 3 * 7, … , 8 * 1 … 8 * 7 까지 구현하는 것을 의미한다.
// html, css, DOM 등을 배워서 조금 더 예쁜 화면을 만들어 본다.
// 힌트
// 사용자가 입력한 값을 문자열(string)로 받는다.
// 사용자가 입력한 값을 쉼표(,)를 기준으로 분리한다.
// 쉼표를 기준으로 분리한 문자열을 숫자로 변환한다.
// 2중으로 반복문(for 또는 while)을 실행해 곱셈 결과를 화면에 출력한다.
// 학습 마무리 조언
// 지금까지 과정에서 자신 없는 부분, 이해가 되지 않는 부분을 정리하고 해당 부분을 집중 연습한다.
// 전체 과정을 반복 연습한다. 단, 반복 연습할 때 힌트를 조금씩 줄여가면서 연습한다.
// 각 단계 내용 중 자신이 이해한 부분과 이해하지 못한 부분을 정리한다. 이해하지 못한 부분은 다른 미션을 구현하면서 이해하기 위해 노력한다.
// 새롭게 등장하는 용어들에 대해 자신이 이해한 수준으로 정리하는 연습을 한다. 반드시 100% 이해하지 못해도 괜찮다.

let inputNumbers = prompt("원하는 단수를 입력<br>ex) 8,7 --> ...8*7").split(",");
        let userNumbers = inputNumbers.map(strNumber => parseInt(strNumber, 10));
        
        for (i = 2; i <= userNumbers[0]; i++) {
            document.write('<h2>' + i + '단</h2>')
            for (j = 1; j <= userNumbers[1]; j++) {
                document.write(`${i} * ${j} = ${i * j}\n<br>`)
            }
        }
