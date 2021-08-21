
// Find a pair of elements from an specified array whose sum equals a specific target number


function twoSum(nums, target_num) {
  var map = [];
  var indexnum = [];
  
  for (var x = 0; x < nums.length; x++)
  {
  if (map[nums[x]] != null)
  {
  index = map[nums[x]];
  indexnum[0] = index;
  indexnum[1] = x;
  break;
  }
  else
  {
  map[target_num - nums[x]] = x;
  }
  }
  return indexnum;
  }

console.log(twoSum([10,21,5,40,50,60,70],45));

// another way to solve this would be to check weather the target number - a value at an index is == to the value at the next index 

function twoSum(nums, target_num) {
    var indexnum = [];
    
    for (var x = 0; x < nums.length; x++)
    {
    if (target_num - num[x] === num[x+1])
    {
    //index = map[nums[x]];
    indexnum[0] = x;
    indexnum[1] = x+1;
    break;
    }
    continue;
    }
    return indexnum;
}


console.log(twoSum([10,21,5,40,50,60,70],45));