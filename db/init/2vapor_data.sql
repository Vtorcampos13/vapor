USE vapor;

INSERT INTO usuarios (nickname, email, password)
VALUES
('GeorgeJungla', 'george@thebridge.eus', '1234'),
('DanielMaster', 'danel@thebridge.eus', '1234'),
('JuanIrueta', 'jirueta@gmail.com', '1234'),
('Andermendi', 'ander@aramendi.com', '1234'),
('Palex', 'alex@padel.eus', '1234'),
('JesusTA', 'theta@thebridge.eus', '1234');

INSERT INTO categorias (nombre)
VALUES
('acción'), ('aventura'), ('terror'), ('simulación'), ('plataforma');

INSERT INTO juegos (titulo, tamano, id_categorias, imagen)
VALUES
('Assassins Code: Backend', 180, 1, 'https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7qSZMxLOAsEPF6tXGFD83n/b0914152c722de321e278683a844fd10/ac-brotherhood.jpg?imwidth=360'),
('Super George Bros', 5.7, 4, 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiLf9b2jypcTEJEBnbvZRGQ9htEqxP-XOGoVc51rSulFeDAgGPcyEKZvCe9Nd-b11YBNjyzlOn0m1Voy0wwcSxBsrZ2EM7EppSZ5dsKohhUDssiwWx3qrDdtFBw4ukZ_5O9g5za1V35SuTkUBzHrni6VgpKzWqMqkuL8i6ExIaAFS1tfZcgzX4sHDz0/s1200/Super%20Mario%20Bros%20La%20pel%C3%ADcula%207.jpg'),
('Red Dead Redemption 2', 99, 1, 'https://image.api.playstation.com/cdn/UP1004/CUSA03041_00/Hpl5MtwQgOVF9vJqlfui6SDB5Jl4oBSq.png'),
('Overcatch', 15, 2, 'https://m.media-amazon.com/images/M/MV5BMzBmOGI5NDktN2I0My00NjhkLTljM2MtMTQwNmZlNWM0NzYxXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_.jpg'),
('Dark Souls III', 25, 3, 'https://image.api.playstation.com/cdn/EP0700/CUSA03365_00/OFMeAw2KhrdaEZAjW1f3tCIXbogkLpTC.png'),
('Grand Theft Auto V', 76, 1, 'https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/fob/1280/V.jpg'),
('The Witcher 3: Wild Hunt', 35, 3, 'https://cdn.cloudflare.steamstatic.com/steam/apps/292030/capsule_616x353.jpg?t=1693590732'),
('Minecraft', 45, 2, 'https://image.api.playstation.com/vulcan/img/cfn/11307x4B5WLoVoIUtdewG4uJ_YuDRTwBxQy0qP8ylgazLLc01PBxbsFG1pGOWmqhZsxnNkrU3GXbdXIowBAstzlrhtQ4LCI4.png'),
('Forknite', 57, 1, 'https://image.api.playstation.com/vulcan/ap/rnd/202311/0220/b2f6d383b0d49f69646e6f4231bfcb4d5255083b228d18b1.png?'),
('Call of Code: Modern Warfare', 175, 1, 'https://i.blogs.es/88d2ec/cod_mw/450_1000.webp'),
('Git of War', 44, 3, 'https://image.api.playstation.com/vulcan/img/rnd/202010/2217/p3pYq0QxntZQREXRVdAzmn1w.png'),
('Hola: Combat Devolved', 4.5, 4, 'https://sm.ign.com/ign_es/game/h/halo-comba/halo-combat-evolved-anniversary_63na.jpg'),
('World of Code ', 98, 1, 'https://media.vandal.net/m/117787/world-of-warcraft-dragonflight-202212410534852_1.jpg'),
('Uncharted 4: A Thiefs End', 50, 2, 'https://image.api.playstation.com/vulcan/img/rnd/202010/2620/gPTPUF3mT9FXELav8OKXmr9j.png'),
('Programent Evil 4', 12, 3, 'https://image.api.playstation.com/vulcan/ap/rnd/202210/0706/EVWyZD63pahuh95eKloFaJuC.png'),
('Justify 2', 105, 1, 'https://cdn1.epicgames.com/offer/428115def4ca4deea9d69c99c5a5a99e/FR_Bungie_Destiny2_S2_1200x1600_1200x1600-c04030c570b63cdced320be0f88a9f89'),
('The Bootcamp Scrolls V: Scripting', 125, 2, 'https://upload.wikimedia.org/wikipedia/fr/thumb/0/0d/The_Elder_Scrolls_5_Skyrim_Logo.png/640px-The_Elder_Scrolls_5_Skyrim_Logo.png'),
('Damn', 57, 4, 'https://image.api.playstation.com/vulcan/ap/rnd/202009/2814/2SuRSOLGDyuN7yOnDspiCkLu.png'),
('Mass Effect 2', 12, 1, 'https://upload.wikimedia.org/wikipedia/en/0/05/MassEffect2_cover.PNG');

INSERT INTO install (fecha, id_usuarios, id_juegos)
VALUES
('2020-01-01 10:00:00', 1, 1),
('2020-01-01 10:00:00', 2, 2);
