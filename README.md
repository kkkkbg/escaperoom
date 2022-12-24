## 🔑토이프로젝트
정적인 웹사이트 '김신입 구하기'입니다.<br>
이전에 ['나에게 맞는 책찾기 테스트'](https://before2pm.netlify.app/)를 제작해 보았고<br>
제대로 학습하고자 두번째 사이트를 제작하게 되었습니다.

## 📍배포 사이트
https://savenewcomer.netlify.app/

## 📢프로젝트 설명
문제를 풀며 스토리를 진행하는 추리 게임입니다.<br>
텍스트창에 값을 입력하여 문제를 풀이할 수 있습니다.<br>
주어진 문제를 모두 해결하면 틀린 횟수를 띄워주며, sns로 공유할 수 있습니다.

## ✨화면
<img src = "https://user-images.githubusercontent.com/108658971/209080759-9b4fc2de-c374-4eb9-baa7-1e3745c2f6ec.png" width="100%" height="40%"> | <img src = "https://user-images.githubusercontent.com/108658971/209080765-fb05b6f6-e42a-4314-be70-eaaa35d73c1c.png" width="100%" height="40%"> | <img src = "https://user-images.githubusercontent.com/108658971/209080766-ecaaabcf-4910-4d84-9dc1-755cb599d473.png" width="100%" height="40%">
:---:|:---:|:---:|
**메인** | **문제** | **결과 공유**

## 🤦‍♀️어려웠던 점
* 카톡 공유하기 버튼 클릭 시 카카오톡으로 넘어가지 않는 [오류](https://x0xa.tistory.com/180)
    *  카톡 공유하기 버튼 클릭 시 "카카오계정과 카카오톡이 연결되어 있지 않습니다."라는 오류 메세지
    *  크롬에서는 안되고, 마이크로소프트 엣지에서는 넘어가는 상황이 었다(처음엔 그냥 됐다 안됐다 하는건줄 알았음)
    *  두가지 단서를 통해 크롬에서는 카카오 디벨로퍼를 (다른 카카오 아이디로) 사용 중임을 기억해냈다.
    *  카카오 디벨로퍼를 로그아웃하니까 해결 되었다.
* 정답을 눌렀을 때 정답이 아닐때도 화면이 넘어가는 오류
    *  정답 버튼 클릭 시 정답일 경우에만 화면이 넘어가야 하는데 그렇지 않았다.
    *  콘솔을 찍어보니 클릭이벤트가 반복되고 있었다 .
    *  버튼을 지우지 않고 다음 버튼을 생성하고 있어서 버튼이 누적되고 있었는데 화면에서는 겹쳐져서 하나의 버튼처럼 보이는 상태임을 깨달았다.
    *  정답을 맞추고 화면이 바뀔 때마다 버튼을 지워주어 해결
## 💡배운점
* 정적 웹 페이지를 배포해볼 수 있었다.
* 부트스트랩을 사용해 반응형 웹을 디자인해볼 수 있었다.
* sns 공유 기능을 구현해볼 수 있었다.
* json 형식의 데이터를 다뤄볼 수 있었다.
* 실제 사용자에게 피드백을 받는 경험을 할 수 있었다.
