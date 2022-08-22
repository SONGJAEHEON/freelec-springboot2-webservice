class main{
    init() {
        if(document.getElementById('btn-save')){document.getElementById('btn-save').addEventListener('click', ()=>{
            this.save();
        })}
        if(document.getElementById('btn-update')){document.getElementById('btn-update').addEventListener('click', ()=>{
            this.update();
        })}
        if(document.getElementById('btn-danger')){document.getElementById('btn-danger').addEventListener('click', ()=>{
            this.delete();
        })}
    }
    //TODO 20220822 21:20 Combine let variables directly into allocating statements.
    save() {
        let httpRequest;
        let title = document.getElementById('title').value;
        let author = document.getElementById('author').value;
        let content = document.getElementById('content').value;
        let reqJson = {}; // = new Object();
        reqJson.title = title;
        reqJson.author = author;
        reqJson.content = content;

        httpRequest = new XMLHttpRequest();
        httpRequest.onreadystatechange = () => {
            if (httpRequest.readyState === XMLHttpRequest.DONE) {
                if (httpRequest.status === 200) {
                    // let result = httpRequest.response;
                    alert('글이 등록되었습니다.');
                    window.location.href = '/';
                } else {
                    alert('오류가 발생하였습니다. 에러 유형: ' + httpRequest.status);
                }
            }
        };
        httpRequest.open('POST', '/api/v1/posts', true);
        httpRequest.responseType = 'json';
        httpRequest.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
        httpRequest.send(JSON.stringify(reqJson));
    }
    update() {
        let httpRequest2;
        let title = document.getElementById('title').value;
        let content = document.getElementById('content').value;
        let id = document.getElementById('id').value;
        let reqJson2 = {}; // = new Object();
        reqJson2.title = title;
        reqJson2.content = content;

        httpRequest2 = new XMLHttpRequest();
        httpRequest2.onreadystatechange = () => {
            if (httpRequest2.readyState === XMLHttpRequest.DONE) {
                if (httpRequest2.status === 200) {
                    // let result = httpRequest.response;
                    alert('글이 수정되었습니다.');
                    window.location.href = '/';
                } else {
                    alert('오류가 발생하였습니다. 에러 유형: ' + httpRequest2.status);
                }
            }
        };
        httpRequest2.open('PUT', '/api/v1/posts/' + id, true);
        httpRequest2.responseType = 'json';
        httpRequest2.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
        httpRequest2.send(JSON.stringify(reqJson2));
    }
    //TODO 20220822 21:20 Complete the 'function delete'
}

const ma = new main();
ma.init();