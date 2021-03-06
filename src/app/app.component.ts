import { Component } from "@angular/core";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})

export class AppComponent {
  title = "CodeSandbox";
  private cellCount = 500;
  private rowSize = 10;
  public board = [];
  public currentX = 0;
  public currentY = 0;

  player = 'black';

  constructor() {
    for (var i = 0; i < this.cellCount; i++) {
      this.board[i] = { value: i, class: 'white' };
    }
  }

  public cellClick(cell) {
    console.log(cell);

    this.currentX = this.getX(cell);
    this.currentY = this.getY(cell);
    // this.board[cell].class = this.player;
    this.board[cell].class =
      this.board[cell].class == "black" ? "white" : "black";
  }

  private getX(index) {
    const x = index % this.rowSize ;
    console.log('x =' + index + ' : ' + x) ;
    return x;
  }

  private getY(index) {
    let y = index / this.rowSize ;
    y = Math.round(y) ;
    console.log('y =' + y) ;
    return y;
  }
}
