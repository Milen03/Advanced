function solution(action) {
    let result = []

    switch (action) {
        case 'upvote': this.upvotes++; break
        case 'downvote': this.downvotes++; break
        case 'score': result = getSocre.call(this); break
    }

    function getSocre() {
        let positive = this.upvotes
        let negative = this.downvotes
        let total = positive + negative
        let score = positive - negative
        let reting = 'new'



        if(total>50){
        const num=Math.ceil(Math.max(positive,negative)*0.25)
        positive+=num
        negative+=num
    }


    if(total<10){
        reting='new'
    }else if(this.upvotes>total*0.66){
        reting='hot'
    }else if(total>100&&score>=0){
        reting='controversial'
    }else if(score<0){
        reting='unpopular'
    }
   return [positive,negative,score,reting]
    }
return result
    
}
let post = {

    id: '3',

    author: 'emil',

    content: 'wazaaaaa', upvotes: 100, downvotes: 100
};


solution.call(post, 'upvote');
solution.call(post, 'downvote');
let score = solution.call(post, 'score'); 
console.log(score);
     // [127, 127, 0, 'controversial']
solution.call(post, 'downvote');               // (executed 50 times)
score = solution.call(post, 'score');          // [139, 189, -50, 'unpopular']