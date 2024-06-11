console.log('firebase file');

// 파이어베이스 설정 객체 : 내 파이어베이스에 대한 정보
const firebaseConfig = {
    apiKey: "AIzaSyDqkjdqAC32ueJRv5YFBZBsI9jypWWBUZw",
    authDomain: "fir-test-b6f39.firebaseapp.com",
    databaseURL: "https://fir-test-b6f39-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "fir-test-b6f39",
    storageBucket: "fir-test-b6f39.appspot.com",
    messagingSenderId: "768502326548",
    appId: "1:768502326548:web:e29f2596c596ee98958e01"
};

// 파이어베이스 앱 초기화
const app = firebase.initializeApp(firebaseConfig);

//   파이어베이스의 실시간 데이터 베이스

const database = firebase.database()

// 파이어베이스에 데이터 쓰기
const writeUserData = (userId, name, email) => {
    firebase.database().ref('users/' + userId).set({
        email: email,
        name: name
    })
}

// 파이어베이스에 있는 파일 읽기
const readUserData = (userId) => {
    const userRef = firebase.database().ref('users/') //유저라는 경로의 참조를 가져옴!
    userRef.once('value').then((res)=>{
        const data = res.val()
        console.log(data);
    })
};

/* mission!
1. addUserBtn 이라는 id를 가진 버튼을 클릭시
2.사용자가 input 에 입력한 세개의 데이터를 각각 console창에 찍어보기
3. 실전 04 참고 
*/

let addUserBtn = document.getElementById('addUserBtn')
let frm = document.frm.elements

addUserBtn.addEventListener('click', () => {
    console.log(frm[0].value);
    console.log(frm[1].value);
    console.log(frm[2].value);

    writeUserData(frm[0].value, frm[2].value, frm[1].value);
})



let getUserBtn = document.getElementById('getUserBtn');
getUserBtn.addEventListener('click', () => {
    console.log('유저가져오기 ck');
    readUserData('apdl987')
})
