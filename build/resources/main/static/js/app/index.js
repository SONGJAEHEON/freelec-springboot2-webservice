class main{
    init() {
        if(document.getElementById('btn-save')){document.getElementById('btn-save').addEventListener('click', ()=>{
            this.save();
        })}
        if(document.getElementById('btn-update')){document.getElementById('btn-update').addEventListener('click', ()=>{
            this.update();
        })}
        if(document.getElementById('btn-delete')){document.getElementById('btn-delete').addEventListener('click', ()=>{
            this.delete();
        })}
    }
    save() {
        let httpRequestForSave;
        // let title = document.getElementById('title').value;
        // let author = document.getElementById('author').value;
        // let content = document.getElementById('content').value;
        let reqJsonForSave = {}; // = new Object();
        reqJsonForSave.title = document.getElementById('title').value;
        reqJsonForSave.author = document.getElementById('author').value;
        reqJsonForSave.content = document.getElementById('content').value;

        httpRequestForSave = new XMLHttpRequest();
        httpRequestForSave.onreadystatechange = () => {
            if (httpRequestForSave.readyState === XMLHttpRequest.DONE) {
                if (httpRequestForSave.status === 200) {
                    // let result = httpRequestForSave.response;
                    alert('글이 등록되었습니다.');
                    window.location.href = '/';
                } else {
                    alert('오류가 발생하였습니다. 에러 유형: ' + httpRequestForSave.status);
                }
            }
        };
        httpRequestForSave.open('POST', '/api/v1/posts', true);
        httpRequestForSave.responseType = 'json';
        httpRequestForSave.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
        httpRequestForSave.send(JSON.stringify(reqJsonForSave));
    }
    update() {
        let httpRequestForUpdate;
        // let title = document.getElementById('title').value;
        // let content = document.getElementById('content').value;
        let id = document.getElementById('id').value;
        let reqJsonForUpdate = {}; // = new Object();
        reqJsonForUpdate.title = document.getElementById('title').value;
        reqJsonForUpdate.content = document.getElementById('content').value;

        httpRequestForUpdate = new XMLHttpRequest();
        httpRequestForUpdate.onreadystatechange = () => {
            if (httpRequestForUpdate.readyState === XMLHttpRequest.DONE) {
                if (httpRequestForUpdate.status === 200) {
                    alert('글이 수정되었습니다.');
                    window.location.href = '/';
                } else {
                    alert('오류가 발생하였습니다. 에러 유형: ' + httpRequestForUpdate.status);
                }
            }
        };
        httpRequestForUpdate.open('PUT', '/api/v1/posts/' + id, true);
        httpRequestForUpdate.responseType = 'json';
        httpRequestForUpdate.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
        httpRequestForUpdate.send(JSON.stringify(reqJsonForUpdate));
    }
    delete() {
        let httpRequestForDelete;
        let id = document.getElementById('id').value;
        let reqJsonForDelete = {}; // = new Object();

        httpRequestForDelete = new XMLHttpRequest();
        httpRequestForDelete.onreadystatechange = () => {
            if (httpRequestForDelete.readyState === XMLHttpRequest.DONE) {
                if (httpRequestForDelete.status === 200) {
                    alert('글이 삭제되었습니다.');
                    window.location.href = '/';
                } else {
                    alert('오류가 발생하였습니다. 에러 유형: ' + httpRequestForDelete.status);
                }
            }
        };
        httpRequestForDelete.open('DELETE', '/api/v1/posts/' + id, true);
        httpRequestForDelete.responseType = 'json';
        httpRequestForDelete.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
        httpRequestForDelete.send(JSON.stringify(reqJsonForDelete));
    }
}

const ma = new main();
ma.init();
