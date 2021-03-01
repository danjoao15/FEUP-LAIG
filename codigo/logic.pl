  % Matrix Manipluation %

at(Elem,0,[Elem|_]).
at(Elem,Index,[_|Tail]) :-
	Index1 is Index - 1,
	Index > 0,
	at(Elem,Index1,Tail).

  % Oolong Logic %

play(_,_,_,_,5,_).
play(_,_,_,_,_,5).
play(X1,Y1,Player,Board,BP,GP) :-
  getPiecePlayer(Player,Piece),
  repeat,
  printPlayMessage(X1,Y1),
  readPlay(X,Y),
  validatePlay(X,Y,X1,Y1,Board),
  putPieceAt(X,Y,Piece,Board,NewBoard),
/*  updateWaiter(Y,X,NewBoard,NewNewBoard),
  removeWaiter(Y1,X1,NewNewBoard,NewNewNewBoard),*/
  printBoard(NewBoard),
  nextPlayer(Player,Player1),
/*  !,
  gameStatus(NewBoard,BP1,GP1),*/
  play(X,Y,Player1,NewBoard,BP1,GP1).

validatePlay(X, Y, X1, Y1, Board):-
  at(L1,Y1,Board),
  at(L2,X,Board),
  validateTable(X,Y1,L1,L2),
  validateSeat(Y,X1,L2).

validateTable(X,Y1,L1,L2):-
  validateTableNotFull(L1),
  validateCorrectTable(X,Y1).
validateTable(X,Y1,L1,L2):-
  \+(validateTableNotFull(L1)),
  validateTableNotFull(L2).
validateTable(X,Y1, L1, L2):-
  nl, write('  Invalid Table!'), write(' '), !,
  fail.

validateCorrectTable(X,Y):-
  X=Y.

validateTableNotFull(L):-
  member('-',L).
validateTableNotFull(L):-
  nl, write('  Table full!'), write(' '), !,
  fail.

member(H,[H|T]).
member(X,[H|T]) :- member(X,T).

validateSeat(Y,X1,L):-
  Y\=X1,
  at('-',Y,L).
validateSeat(Y,Y1,L):-
  nl, write('  Invalid Seat!'), write(' '), !,
  fail.

gameStatusR(Board,HP,RP):-
	countPoints('I',0,0,HP,Board),
	countPoints('O',0,0,RP,Board),
  nl,
	write('Human Player: '),
	write(HP), nl,
	write('Robot Player: '),
	write(RP), nl.

gameStatus(Board,BP,GP):-
	countPoints('O',0, 0, BP,Board),
	countPoints('I',0, 0, GP,Board),
  nl,
	write('O Player: '),
	write(BP), nl,
	write('I Player: '),
	write(GP), nl.

countPoints(Symbol,9,P,P1,Board).
countPoints(Symbol,Zer,Points,FinalPoints,Board):-
	at(T1,Zer,Board),
	countTable(Symbol,0,0,Pts,T1),
	(Pts=9->Points1=Points+1;
   Pts=8->Points1=Points+1;
   Pts=7->Points1=Points+1;
   Pts=6->Points1=Points+1;
   Pts=5->Points1=Points+1;
   Pts=4->Points1=Points;
   Pts=3->Points1=Points;
   Pts=2->Points1=Points;
   Pts=1->Points1=Points;
   Pts=0->Points1=Points),
  Zer1=Zer+1,
  FinalPoints1=Points,
	countPoints(Symbol,Zer1,Points1,FinalPoints1,Board).

countTable(Symbol,9,P,P1,T).
countTable(Symbol,Zer,Points,FinalPoints,T):-
  checkSymbol(Symbol,Zer,T,Var),
	(Var=1->Points1=Points+1;
	 Var=0->Points1=Points),
  Zer1=Zer+1,
  FinalPoints1=Points1,
	countTable(Symbol,Zer1,Points1,FinalPoints1,T).

checkSymbol(Symbol,Ind,T,Var):-
  at(Symbol,Ind,T),
  Var=1.
checkSymbol(Symbol,Ind,T,Var):-
  Var=0.

nextPlayer(Player, Next):-
  (Player = 'Green'-> Next='Black';
  Player ='Black' -> Next='Green').

readPlay(X,Y):-
  nl, nl, write(' Where do you want to move the piece? '), nl,
  getCoords(X,Y).

getCoords(X,Y):-
  write('    Table: '),
	getInt(X),
	write('    Seat:  '),
	getInt(Y).

getInt(X):-
  get_code(Y),
  get_code(_),
  X is Y-48,
  X<9.
getInt(X):-
  nl, write('  Invalid input!'),
  fail.

putPieceAt(X, Y, Piece, Board, NewBoard):-
  at(L1, X, Board),
  replace(Piece, Y, L1, L2),
  replace(L2, X, Board,NewBoard).

printPlayMessage(X,Y):-
  nl, nl,
  write('The previous player sent you to table '),
  write(Y),
  write('. You cannot play at the seat '),
  write(X).

replace(New,0,[_|OldList],[New|OldList]).
  replace(New,Index,[Head|OldList],[Head|NewList]):-
  Index > 0,
  Index1 is Index-1,
  replace(New,Index1,OldList,NewList).

updateWaiter(X1,Y1, Board, NewBoard):-
  at(L1, Y1, Board),
  validateTableNotFull(L1),
  replace('S', Y1, L1, L2),
  replace(L2,X1,Board,NewBoard).
updateWaiter(X1,Y1, Board, NewBoard):-
  NewBoard = Board.

removeWaiter(X1,Y1, Board, NewBoard):-
  at(L1, Y1, Board),
  validateTableNotFull(L1),
  replace('-', X1, L1, L2),
  replace(L2,Y1,Board,NewBoard).
removeWaiter(X1,Y1, Board, NewBoard):-
  NewBoard = Board.

getPiecePlayer(Player, Piece):-
  (Player='Green'-> Piece='I';
   Player='Black'-> Piece='O').
