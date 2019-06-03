let Queue = require('./index');


function hotPotato(nameList, number) {
    var queue = new Queue();
    for (let i = 0, len = nameList.length; i < len; i++) {
        queue.enqueue(nameList[i]);
    }
    let eliminated = '';
    while (queue.size() > 1) {
        for(let i = 0; i < number; i++) {
            queue.enqueue(queue.dequeue());
        }
        eliminated = queue.dequeue();
        console.log(eliminated + "----在击鼓传花中被淘汰----");
    }
    console.log(queue.dequeue() + "在击鼓传花中获得胜利！！！");
}

hotPotato(['Any', 'Amy', 'Green', 'Tom', 'Thompon', 'Bro', 'James', 'Aviral'], 8);