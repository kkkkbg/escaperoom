const url = 'https://before2pm.netlify.app/';

//카톡공유버튼 클릭했을 때 호출. 결과 화면에서 결과 번호를 받음
function setShare(){
    var resultImg = document.querySelector('#resultImg');
    var resultAlt = resultImg.firstElementChild.alt;  //책번호
    const shareTitle = '문제풀이 결과';
    const shareDes = infoList[resultAlt].name;  //책이름
    const shareImage = url + 'img/key.jpg';
    const shareURL = url + 'index.html';  //이거 해줄려고 html 하나하나 만들었음,,
    
    Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title: shareTitle,
          description: '내 점수는 '+shareDes+'( •̀ ω •́ )✧',
          imageUrl: shareImage,
          link: {
            mobileWebUrl: shareURL,
            webUrl: shareURL,
          },
        },
        buttons: [
          {
            title: '나도 해볼래!',
            link: {
              mobileWebUrl: shareURL,
              webUrl: shareURL,
            },
          },
        ]
      });
}