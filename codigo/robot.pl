
playR(_,_,_,_,5,_).
playR(_,_,_,_,_,5).
playR(X1,Y1,Player,Board,HP,RP) :-
  getPiecePlayerR(Player,Piece),
  (Player='Human' -> humanPlay(X,Y,X1,Y1,Board);
  Player='Robot' -> robotPlay2(X,Y,X1,Y1,Board)),
/*  get_code(_),*/
  putPieceAt(X,Y,Piece,Board,NewBoard),
/*  updateWaiter(Y,X,NewBoard,NewNewBoard),
  removeWaiter(Y1,X1,NewNewBoard,NewNewNewBoard),*/
  (Player='Human'->nl;
   Player='Robot'->printBoard(NewBoard)),
  nextPlayerR(Player,Player1),
/*  gameStatus(NewBoard,HP1,RP1),*/
  playR(X,Y,Player1,NewBoard,HP1,RP1).

getPiecePlayerR(Player, Piece):-
  (Player='Human'->Piece='I';
   Player='Robot'->Piece='O').

nextPlayerR(Player, Next):-
  (Player='Human'->Next='Robot';
   Player='Robot'->Next='Human').

humanPlay(X,Y,X1,Y1,Board):-
  repeat,
  printPlayMessage(X1,Y1),
  readPlay(X,Y),
  validatePlay(X,Y,X1,Y1,Board).

robotPlay(X,Y,X1,Y1,Board):-
  selectTable(X,Y1,Board),
  repeat,
  random_between(0, 8, R),
  randomizeSeat(X,Y,R,X1,Board).

selectTable(X,Y1,Board):-
  at(L,Y1,Board),
  validateTableNotFull(L),
  X=Y1.
selectTable(X,Y1,Board):-
  randomizeTable(X,0,Board).

randomizeTable(X,Y,Board):-
  at(L,Y,Board),
  validateTableNotFull(L),
  X=Y1.
randomizeTable(X,Y,Board):-
  Y1=Y+1,
  randomizeTable(X,Y1,Board).

randomizeSeat(X,Y,R,X1,Board):-
  at(L,X,Board),
  at('-',R,L),
  R\=X1,
  Y=R.

% ----- different module 4 Random Play ----- %

robotPlay2(X,Y,X1,Y1,Board):-
  repeat,
  randomizePlay(X,Y),
  validatePlayR(X,Y,X1,Y1,Board).

randomizePlay(X,Y):-
  random_between(0, 8, X),
  random_between(0, 8, Y).

validatePlayR(X, Y, X1, Y1, Board):-
  at(L1,Y1,Board),
  at(L2,X,Board),
  validateTableR(X,Y1,L1,L2),
  validateSeatR(Y,X1,L2).

validateTableR(X,Y1,L1,L2):-
  validateTableNotFullR(L1),
  validateCorrectTable(X,Y1).
validateTableR(X,Y1,L1,L2):-
  \+(validateTableNotFullR(L1)),
  validateTableNotFullR(L2).

validateTableNotFullR(L):-
  member('-',L).

validateSeatR(Y,X1,L):-
  Y\=X1,
  at('-',Y,L).
