const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const result = document.querySelector("#result");
const endPoint = 5; //질문 갯수
var count = 0;

function calResult(){
    var result;
    if(count <= 5){
        result = 0;
    }else if(count <= 10){
        result = 1;
    }else if(count <= 15){
        result = 2;
    }else if(count <= 20){
        result = 3;
    }else{
        result = 4;
    }
    return result;
}

//[4] 알맞는 결과데이터 띄워주는 함수
function setResult(){
    //가장 많이 선택 된 책번호
    let point = calResult();
    const resultName = document.querySelector('.resultname');
    resultName.innerHTML = infoList[point].name+"("+count+"개 틀림)";

    //img요소 생성
    // var resultImg = document.createElement('img');
    // const imgDiv = document.querySelector('#resultImg');
    // 최다득표 책번호에 맞는 이미지파일
    // var imgURL = 'img/image-'+point+ '.jpeg';

    // img요소에 이미지 정보 붙여줌
    // resultImg.src = imgURL;
    // resultImg.alt = point;
    // resultImg.classList.add('img-fluid');
    // 이미지 들어오는 자리에 img요소 붙여줌 == <div id="resultImg"><img></div>
    // imgDiv.appendChild(resultImg);

    //책 설명 붙여줌
    const resultDesc = document.querySelector('.resultDesc');
    resultDesc.innerHTML = infoList[point].desc;
}

//[3b] 결과화면 띄워주는 함수(마지막 질문화면 숨기고 결과화면 나타남)
function goResult(){
    qna.style.WebkitAnimation = "fadeOut 0.5s";
    qna.style.animation = "fadeOut 0.5s";
    setTimeout(() => {
        result.style.WebkitAnimation = "fadeIn 0.5s";
        result.style.animation = "fadeIn 0.5s";
        setTimeout(() => {
            qna.style.display = "none";
            result.style.display = "block"
        }, 450)
    })
    //[4] 결과 함수 호출
    setResult();
}

//[3a] 화면에 답변리스트 붙임
function addAnswer(answerText, qIdx){
    console.log("addAnswer함수=====");
    var answerBox = document.querySelector('.answerBox');
    answerBox.innerHTML = "<input type='text' id='answer' style='width: 415px; height: 30px;'>"
                +"<button type='button' class='answerbtn' style='height: 37px;'>정답 확인</button>"
    var answer = document.querySelector('.answerbtn');
    
//img요소 생성
var qImg = document.createElement('img');
const imgDiv = document.querySelector('#qImg');
// 최다득표 책번호에 맞는 이미지파일
var imgURL = 'img/image-'+qIdx+ '.jpeg';

// img요소에 이미지 정보 붙여줌
qImg.src = imgURL;
qImg.alt = qIdx+1;
qImg.classList.add('img-fluid');
qImg.classList.add('answerImg');
// 이미지 들어오는 자리에 img요소 붙여줌 == <div id="qImg"><img></div>
imgDiv.appendChild(qImg);

    //answer(정답확인버튼) 클릭하면
    answer.addEventListener("click", function(){
        console.log("click=====");
            var answervalue = document.getElementById('answer').value;
            var answerImg = document.querySelectorAll('.answerImg');
            // console.log(answerImg);
            console.log("answerText : "+answerText);
            // console.log("qIdx : "+qIdx);
            //맞추면
            if(answerText == answervalue){
                document.getElementById('answer').value = "";
                console.log("if문=====");
                //사진 다 없어지게 함
                for(let i = 0; i < answerImg.length; i++){
                    answerImg[i].style.WebkitAnimation = "fadeOut 0.5s";
                    answerImg[i].style.animation = "fadeOut 0.5s";
                }
                //버튼 다 없어지게 함
                for(let i = 0; i < answer.length; i++){
                    answer[i].disabled = true;    //버튼 비활성화
                    answer[i].style.WebkitAnimation = "fadeOut 0.5s";
                    answer[i].style.animation = "fadeOut 0.5s";
                }
                setTimeout(()=>{
                    for(let i = 0; i < answerImg.length; i++){
                        answerImg[i].style.display = 'none';
                    }
                    //다음 값 호출되도록 번호 늘려줌
                    goNext(++qIdx);
                },450)
            }else{
                alert("조금 더 생각해 보세요");
                ++count;
                return false;
            }
    }, false);
}

//[2]다음 질문페이지 띄워줌
function goNext(qIdx){
    console.log("goNext함수=====");
    //마지막 질문일때는
    if(qIdx === endPoint){
        //[3b] 결과화면 띄워줌
        goResult();
        return;
    }
    // 질문화면 텍스트 뿌리기
    var q = document.querySelector('.qBox');
    q.innerHTML = qnaList[qIdx].q;

        //[3a] 화면에 사진뿌리기(답변text, 질문번호, 답변번호)
        addAnswer(qnaList[qIdx].a, qIdx);

    // 질문 갯수에 맞춰서 진행 바 늘리기
    var status = document.querySelector('.status');
    status.innerHTML = qIdx+1+'번 문제';
}

// [1]시작하기 눌렀을 때 호출 될 함수
function begin(){
    //시작 화면 사라지게함
    main.style.WebkitAnimation = "fadeOut 1s";
    main.style.animation = "fadeOut 1s";
    //0.45초 후에 실행되는 함수
    setTimeout(() => {
        //질문 화면 나타나게 함
        qna.style.WebkitAnimation = "fadeIn 1s";
        qna.style.animation = "fadeIn 1s";
        //0.45초 후에 실행되는 함수
        setTimeout(() => {
            //시작 화면 숨기고 질문 화면 띄움
            main.style.display = "none";
            qna.style.display = "block"
        }, 450)
        //질문 갯수
        let qIdx = 0;
        //[2] 0번 들고 다음페이지로 가는거임!!
        goNext(qIdx);
    }, 450);
}