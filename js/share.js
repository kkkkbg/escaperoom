const url = 'https://savenewcomer.netlify.app/';

//카톡공유버튼 클릭했을 때 호출. 결과 화면에서 결과 번호를 받음
function setShare(){
    var count = document.frm.count.value;  //틀린갯수
    const shareTitle = '김신입 구하기 성공( •̀ ω •́ )✧';
   // const shareDes = infoList[resultAlt].name;  //책이름
    const shareImage = url + 'img/key.jpg';
    const shareURL = url;
    
    Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title: shareTitle,
          description: '틀린 횟수 : '+count,
          imageUrl: shareImage,
          link: {
            mobileWebUrl: shareURL,
            webUrl: shareURL,
          },
        },
        buttons: [
          {
            title: '김신입을 구해주세요!',
            link: {
              mobileWebUrl: shareURL,
              webUrl: shareURL,
            },
          },
        ]
      });
}
