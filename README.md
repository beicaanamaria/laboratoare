var run=function(){
	var number=[3,4,5,9,12,15,17];
	var count=0;
	number.forEach(
	function(c){
	var isDivisible=isDivisibleBy3(c);
	println("The number{0} is divisible by 3? {1}". format(c, isDivisible();

	if(isDivisible)
	count++;
	}
	);
	println();
	println("There are {0} numbers divisible by three in array{1}"
	.format(count,numbers));
	}
	var isDivisibleBy3=function(number){
	return%3==0;

	}
}
