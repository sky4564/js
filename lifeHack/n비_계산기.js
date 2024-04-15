// n비 계산에 참여하는 인원   = n 명으로
// 술은 안먹는 깎두기   = k

cal_nonAlc_table = (bill, alcPrice, n, k) => {
	let sum = bill.reduce((acc, cur) => acc + cur);
	let pay = (sum - alcPrice) / n;
	let alcFee = Math.floor(alcPrice / (n - k));
	let result = {
		총합: sum,
		술쟁이들: pay + alcFee,
		노술쟁이: pay,
	};
	return result;
};

cal_alc_table = (bill, n) => {
	let sum = bill.reduce((acc, cur) => acc + cur);
	let pay = sum / n;
	let result = {
		//맨마지막 줄 넣는지 여부
		총합: sum,
		술쟁이들: pay,
	};
	return result;
};

console.log(cal_nonAlc_table([71000, 35500, 8000], 25000, 4, 1));
console.log(cal_alc_table([71000, 35500, 8000], 4));
