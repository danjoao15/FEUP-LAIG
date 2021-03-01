class comunication {
  constructor(scene) {
    this.scene=scene;
    this.port=8081;
  }

  requestInitGame(mode){
    this.requestProlog("initGame("+mode+")",this.requestBoard );
  }

  requestBoard(){
    this.requestProlog("getBoard", this.BoardListener);
  }

  BoardListener(event){
    this.scene.Matrix.board=JSON.parse(event.target.response);
  }


requestProlog(pred, listener){
  let request = new XMLHttpRequest();
  request.open("GET","http://localhost:"+ this.port +"/"+pred, true);
  request.addEventListener("load", listener);
  request.send();
}

}
