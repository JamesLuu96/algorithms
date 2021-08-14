// mySet methods:
// .has(el) = returns true or false if el is in the Set
// .values() = returns the values of Set
// .add(el) = adds el into the Set without duplicate
// .remove(el) = removes el out of Set
// .size() = returns size of Set
// .union(otherSet) = returns a Set with all elements of both Sets
// .intersection(otherSet) = returns a Set with elements that are shared between Sets 
// .difference(otherSet) = returns a Set with elements that are not shared between Sets 
// .subset(otherSet) = returns true or false if Set is subset of otherSet

const mySet = function(){
    const collection = []
    this.has = function(el){
        return collection.indexOf(el) !== -1
    }
    this.values = function(){
        return collection
    }
    this.add = function(el){
        if(!this.has(el)){
            collection.push(el)
            return true
        }
        return false
    }
    this.remove = function(el){
        if(this.has(el)){
            const index = collection.indexOf(el)
            collection.splice(index, 1)
            return true
        }
        return false
    }
    this.size = function(){
        return collection.length
    }
    this.union = function(otherSet){
        const unionSet = new mySet()
        collection.forEach(e=>{
            unionSet.add(e)
        })
        otherSet.values().forEach(e=>{
            unionSet.add(e)
        })
        return unionSet
    }
    this.intersection = function(otherSet){
        const intersectionSet = new mySet()
        collection.forEach(e=>{
            if(otherSet.has(e)){
                intersectionSet.add(e)
            }
        })
        return intersectionSet
    }
    this.difference = function(otherSet){
        const differenceSet = new mySet()
        collection.forEach(e=>{
            if(!otherSet.has(e)){
                differenceSet.add(e)
            }
        })
        return differenceSet
    }
    this.subset = function(otherSet){
        return collection.every(e=>{
            return otherSet.has(e)
        })
    }
}

const testSet = new mySet()
testSet.add('lies')
testSet.add('why')
testSet.add('my')
testSet.add('hi')

const testSet2 = new mySet()
testSet2.add('lies')
testSet2.add('hi')
testSet2.add('why')
const combined = testSet.difference(testSet2)

console.log(testSet2.subset(testSet))

