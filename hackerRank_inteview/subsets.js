var subsets = function(nums) {
 let res = [[]]
	for (let i = 0; i < nums.length; i++) {
		res.forEach(item => {
			res.push([...item, nums[i]])
            console.log(i)
		})
	}
	return res
};

console.log(subsets([1,2,3]))