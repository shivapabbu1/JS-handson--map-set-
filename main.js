// let str="abcadeefb";
// let s=new Set();

// for(let i=0;i<str.length;i++){
//   s.add(str[i]);
// }
// let res="";
// for(let ch of s){
//   res=res+ch
// }
// console.log(res);

//  key value for map object

//  let s="abcbacd";
//  let map=new Map();
//  for(let i=0;i<s.length;i++){
// if(map.has(s[i])){
// let value=map.get(s[i])
// map.set(s[i],value+1)
// }
// else{
//     map.set(s[i],1);
// }
//  }
//  for(let [k,v] of map){
//     console.log(k+"="+v);
//  }

//"1.Problem:
// You are given a string (STR) of length N, consisting of only the lower case English alphabet.
// Your task is to remove all the duplicate occurrences of characters in the string.
// Input:
// abcadeecfb
// Output:
// abcdef"
// Method-1:
function removeDuplicate(str,n){	
// Create a set using String characters
	var s = new Set();	
// HashSet doesn't allow repetition of elements
	for (var i = 0; i < n;i++){
		s.add(str[i]);
	}
// Print content of the set
	for (let i of s) {
		console.log(i);
    }
}
var str="abcadeecfb"
var n = str.length
removeDuplicate(str,n);

// Method-2
let s = "abcadeecfb"
let set = new Set();
for(let i=0;i < s.length;i++){
 set.add(s[i])
}
let res=""
for(let ch of set){
  res = res+ch;
}
console.log(res);

// 2."Problem:
// You are given a string (STR) of length N, you have to print the count of all alphabet.(using maps)

// Input:
// abcadeecfb

// Output:
// a=2
// b=2
// c=2
// d=1
// e=2
// f=1"
// METHOD-1:
function countOfOccurancces(str)
{
// Store all characters and
// their frequencies in dictionary
var d = new Map();

str.split('').forEach(i => {
	
		if(d.has(i))
		{
			d.set(i, d.get(i)+1);
		}
		else
			d.set(i, 1);
});

// Print characters and their
// frequencies in same order
// of their appearance
str.split('').forEach(i => {
	// Print only if this
	// character is not printed
	// before
	if(d.has(i) && d.get(i)!=0)
	{
	console.log( i + "=" + d.get(i) + "\n");
	d.set(i, 0);
	}
});
}

// Driver Code
var str="abcadeecfb";
countOfOccurancces(str);

// METHOD-2:
let strr = "abcadeecfb"
let map=new Map();
for(let i=0;i < strr.length;i++){
  if(map.has(strr[i])){
    let value = map.get(strr[i])
    map.set(strr[i],value+1)
  }
  else{
    map.set(strr[i],1)
  }
}
for (let [k,v] of map){
 console.log(k+"-->"+v);}