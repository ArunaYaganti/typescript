const video = {
    title: 'video',
    tags: ['a', 'b', 'c'],
    showtags() {
        this.tags.forEach(function(tag){
            console.log(this.title + ':' + tag);
        })

    }
};
video.showtags();

const video1 = {
    title: 'video1',
    tags: ['a', 'b', 'c'],
    showtags1() {
        this.tags.forEach(function(tag){
            console.log(this.title + ':' + tag);
        },this)

    }
};
video1.showtags1();

const video2 = {
    title: 'video2',
    tags: ['a', 'b', 'c'],
    showtags2() {
        this.tags.forEach((tag) =>{
            console.log(this.title + ':' + tag);
        })

    }
};
video2.showtags2();