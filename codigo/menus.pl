mainMenu:- nl,
	write('     -:- Oolong -:-         '), nl,
	write('                            '), nl,
	write('  1. Player vs. Player      '), nl,
	write('  2. Player vs. Computer    '), nl,
	write('  3. About                  '), nl,
	write('  4. Exit                   '), nl,
	write('                            '), nl,
	write('  > '),
	getChar(OP), (
		OP = '1' -> game, mainMenu;
		OP = '2' -> gameR, mainMenu;
		OP = '3' -> aboutMenu, mainMenu;
		OP = '4';
		mainMenu).

aboutMenu:-
	nl,
	write('     -:- About -:-              '), nl,
	write('                                '), nl,
	write('  Creators:                     '), nl,
	write('     - Daniela Joao             '), nl,
	write('     - Joao Monteiro            '), nl,
	write('                                '), nl,
	write('  Enter to return    '),
	get_char(_).

pvc:-
	nl,
	write('  Work in progress...           '), nl,
  write('  Sorry for the inconvenience...'), nl,
	write('  Enter to return    '),
	get_char(_).

getChar(C):-
	get_char(C),
	get_char(_).
