/*
let num1 = 10
let num2 = 15;
let sum = num1 + num 2;
console.log(sum);

let num3 = 1;
let num4 = 5;
let sum2 = num3 + num4;
console.log(sum2);

*/

function add(a, b){
	console.log(a+b);
}

//리턴 함수
function addReturn(a, b){
	return a+b;
	console.log('함수 호출'); // 리턴으로 실행되지 않음
}
add(10,15);
add(1,5);

let result = addReturn(10, 15);
//템플릿 리터럴
console.log(`더한 결과 ${result}`);

/*
Early Return Pattern
조건 만족시 빨리 리턴
*/

// 가독성이 안좋음
function compare(num){
	if(num===0){
		console.log("num 값 0");
	} else if(num<0){
		console.log("num 값 0 보다 작음");
	} else {
		if(num>=10){
			console.log("num 값 10 이상");
		} else {
			console.log("num 값 0 ~ 10");
		}
	}
}
compare(15);

// 개선
function compare(num){
	if(num===0){
		return 'num 값 0';
	}
	
	if(num<0){
		return 'num 값 0 보다 작음';
	}
	
	if(num>=10){
		return 'num 값 10 이상';
	} 
	
	return 'num 값 0 ~ 10';
}

console.log(compare(15));


/* 중간 호출로 코드 흐름 제어 */
function print(){
	console.log(1);
	console.log(2);
}
console.log(3);
print();
console.log(4);