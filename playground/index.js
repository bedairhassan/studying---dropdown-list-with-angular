// var parents? ::: item, code only ! ::: always display item !
// filter by parent
var parents = ['parent0','parent1','parent2'] // first dropdown 
// selects parent0, go to child1 and select all items 
// parentsSelect is parent0
// find all objects, display items, which has parent parent0
// dropdown2= child1.filter(it=>it.parent===parentSelect)
// rename to 
// dropdown2 = dropdown1.filter(it=>it.parent===dropdown1Select)

// Do dropdown example of input and output of parents

let uniqueParents = (array)=>{

    let parents = array.map(what=>what.parent)

    // new Set()
    let set = new Set()
    for (let i=0;i<parents.length;i++){
        set.add(parents[i])
    }

    return set
}


let concatenate=(array1,array2)=>{
	
	for (let i=0;i<array2.length;i++){
		
		array1.push(array2[i]);
	}
	
	return array1;
}

let fun=(parents)=>{
	
	var child1=[];

    let i=0;
parents.map(parent=>{
    
    child1.push({item:parent+(i++), parent});
    
	
    i=0;
})
return child1;
}

let dropdowns = (array)=>{

    array = array.map(it=>it.parent)
    var lengths = array.map(it=>it.length) // since each item is one character bigger than the other

    let set = new Set()
    for (let i=0;i<lengths.length;i++){
        set.add(lengths[i])
    }

    return Array.from(set).length
    // return set
}

// 8 dropdowns !
var child1=fun(parents); console.log(child1)
var child2=fun(child1.map(parent=>parent.item))
var child3=fun(child2.map(parent=>parent.item))
var child4=fun(child3.map(parent=>parent.item))
var child5=fun(child4.map(parent=>parent.item))
var child6=fun(child5.map(parent=>parent.item))
var child7=fun(child6.map(parent=>parent.item))
var child8=fun(child7.map(parent=>parent.item))

// console.log(child3)
//console.log(uniqueParents(child3))

child1=concatenate(child1,child2)
child1=concatenate(child1,child3)
child1=concatenate(child1,child4)
child1=concatenate(child1,child5)
child1=concatenate(child1,child6)
child1=concatenate(child1,child7)
child1=concatenate(child1,child8)

// console.log(child1)
// console.log(child1)
// console.log(dropdowns(child1))
// console.log(Array.from(uniqueParents(child1)).length) // set to array

