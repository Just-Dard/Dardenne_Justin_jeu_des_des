<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="utf-8">
        <!--Ionic-->
        <script type="module" src="https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.esm.js"></script>  
        <script nomodule src="https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.js"></script>
        <script type="module" src="https://unpkg.com/ionicons@5.4.0/dist/ionicons/ionicons.esm.js"></script>
        <script nomodule="" src="https://unpkg.com/ionicons@5.4.0/dist/ionicons/ionicons.js"></script>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@ionic/core/css/ionic.bundle.css"/>
        <!--CSS-->
        <link rel="stylesheet" href="style.css">
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet">
        <title> Jeu des dés</title>
    </head>
    <body>
        <div class="contour">
            <ion-grid class="ion-text-center">
                <ion-row>
                    <ion-col>
                            <button id="button-newgame" class="button-newgame" type="button">
                                <ion-icon class="icon-add" name="add-circle-outline"></ion-icon>
                                <p class="newgame">NEW GAME</p>
                            </button>
                    </ion-col>
                </ion-row>

                <ion-row>
                    <ion-col>
                        <div class="player-score">
                            <h1 id="player1">PLAYER 1</h1>
                            <p id="global-score1" class="global-score">00</p>
                        </div>
                    </ion-col>
                    <ion-col>
                        <div>
                            <button class="de">
                                <img src="images/de.png" alt="dé à jouer">
                            </button>
                        </div>  
                    </ion-col>
                    <ion-col>
                        <div class="player-score">
                            <h1 id="player2">PLAYER 2</h1>
                            <p id="global-score2" class="global-score">00</p>
                        </div>
                    </ion-col>
                </ion-row>
                <ion-row>
                    <ion-col>
                        <div class="current">
                            <h3>CURRENT</h3>
                            <p id="current-score1" class="current-score">00</p>
                        </div>
                    </ion-col>
                    <ion-col>
                        <div>
                            <button id="button-roll" class="button-roll">
                                <ion-icon class="icon-roll" name="sync-outline"></ion-icon>
                                <p class="roll">ROLL DICE</p> 
                            </button>
                        </div>
                        <div>
                            <button id="button-hold" class="button-hold">
                            <ion-icon class="icon-hold" name="download-outline"></ion-icon>
                            <p class="hold">HOLD</p> 
                            </button>
                        </div>
                    </ion-col>
                    <ion-col>
                        <div class="current">
                            <h3>CURRENT</h3>
                            <p id="current-score2" class="current-score">00</p>
                        </div>
                        </ion-col>
                </ion-row>
            </ion-grid>
        </div>
    <script src="script.js"></script>
    </body>
</html>