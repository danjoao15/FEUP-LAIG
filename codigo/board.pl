printTopRow(L) :-
  at(Piece,1,L), write(Piece).

printTopMidRow(L) :-
  at(Piece1,2,L), write(Piece1),
  space(0,5), at(Piece2,3,L), write(Piece2).

printMidRow(L) :-
  at(Piece1,4,L), write(Piece1),
  space(0,3), at(Piece2,0,L), write(Piece2),
  space(0,3), at(Piece3,5,L), write(Piece3).

printBotMidRow(L) :-
  at(Piece1,6,L), write(Piece1),
  space(0,5), at(Piece2,7,L), write(Piece2).

printBotRow(L) :-
  at(Piece,8,L), write(Piece).

printBoard(Board) :-
  nl,
  at(L1,1,Board),
  space(0,32), printTopRow(L1), nl,
  space(0,29), printTopMidRow(L1), nl,
	space(0,28), printMidRow(L1), nl,
	space(0,29), printBotMidRow(L1), nl,
	space(0,32), printBotRow(L1), nl,

  at(L2,2,Board), at(L3,3,Board),
	space(0,14), printTopRow(L2), space(0,33), printTopRow(L3), nl,
	space(0,11), printTopMidRow(L2), space(0,27), printTopMidRow(L3), nl,
	space(0,10), printMidRow(L2), space(0,25), printMidRow(L3), nl,
	space(0,11), printBotMidRow(L2), space(0,27), printBotMidRow(L3), nl,
	space(0,14), printBotRow(L2), space(0,33), printBotRow(L3), nl,

  at(L4,4,Board), at(L5,0,Board), at(L6,5,Board),
	space(0,5), printTopRow(L4), space(0,26), printTopRow(L5), space(0,26), printTopRow(L6), nl,
	space(0,2), printTopMidRow(L4), space(0,20), printTopMidRow(L5), space(0,20), printTopMidRow(L6), nl,
	space(0,1), printMidRow(L4), space(0,18), printMidRow(L5), space(0,18), printMidRow(L6), nl,
	space(0,2), printBotMidRow(L4), space(0,20), printBotMidRow(L5), space(0,20), printBotMidRow(L6), nl,
	space(0,5), printBotRow(L4), space(0,26), printBotRow(L5), space(0,26), printBotRow(L6), nl,

  at(L7,6,Board), at(L8,7,Board),
	space(0,14), printTopRow(L7), space(0,33), printTopRow(L8), nl,
	space(0,11), printTopMidRow(L7), space(0,27), printTopMidRow(L8), nl,
	space(0,10), printMidRow(L7), space(0,25), printMidRow(L8), nl,
	space(0,11), printBotMidRow(L7), space(0,27), printBotMidRow(L8), nl,
	space(0,14), printBotRow(L7), space(0,33), printBotRow(L8), nl,

  at(L9,8,Board),
	space(0,32), printTopRow(L9), nl,
	space(0,29), printTopMidRow(L9), nl,
	space(0,28), printMidRow(L9), nl,
	space(0,29), printBotMidRow(L9), nl,
	space(0,32), printBotRow(L9), nl, nl.


printExample:-
  write('      Take this guide to explain the positions on both the'), nl,
  write('   tables around the board and the sits around the tables.'), nl, nl,
  write('             1        '), nl,
  write('          2     3     '), nl,
  write('        4    0    5   '), nl,
  write('          6     7     '), nl,
  write('             8        '), nl, nl,
  write('      In the first play you must play at table 0.'),nl,nl.

space(O,O).
space(P,O):-
  P\=O,
  write(' '),
  P1 is P+1,
  space(P1,O).
