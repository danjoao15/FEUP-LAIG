:- include('oolong.pl').

initGame(Mode) :-
retractall(pred(_, _,_,_,_)), % remover jogos anteriores
board(Board),
findMode(Mode,Board).

getBoard(Board):-
pred(Board,_, _,_,_).

getMode(Mode):-
pred(_,Mode,_,_,_).

p(1):-game.
p(2):gameR.

findMode(1, Board):-assert(pred(Board, Mode, 'Black', 0, 0)).
findMode(2, Board):-assert(pred(Board, Mode, 'Human', 0, 0)).

whichPlay(1, X, Y):-
pred(Board,Mode, Player, X1, Y1),
getPiecePlayer(Player, Piece),
validatePlay(X,Y,X1,Y1,Board),
putPieceAt(X,Y,Piece,Board,NewBoard),
nextPlayer(Player,Player1),
retractall(pred(_,_,_,_,_)),
assert(pred(NewBoard, Mode, Player1, X,Y)).

whichPlay(2, X, Y):-
pred(Board,Mode, Player, X1, Y1),
getPiecePlayerR(Player, Piece),
putPieceAt(X,Y,Piece,Board,NewBoard),
nextPlayerR(Player,Player1),
retractall(pred(_,_,_,_,_)),
assert(pred(NewBoard, Mode, Player1, X,Y)).
