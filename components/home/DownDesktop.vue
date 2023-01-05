<template >
    <div class="homeDown">
        <div class="discover">
            <h3>
                2 domaines d'expertises, découvrez nos deux Factory
            </h3>
        </div>

        <div class="mainContainer">
    
            <div class="Container Left">
                <div class="ContainerTitle" style="color:#28ACE3">
                    Web Factory
                </div>
                <div class="ContainerContent">
                    Vous êtes à la recherche d'un partenaire qui vous accompagnera sur la création d'un site vitrine ? <br/>
                    Vous avez un projet pour votre activité nécessitant du développement Web ou  Mobile ? <br/>
                </div>
                <HomeLeftCaroussel/>
            </div>
    
            <div class="Container" Right>
                <div class="ContainerTitle" style="color:#5F43B2">
                    Bot Factory
                </div>
                <div class="ContainerContent">
                    Vous avez besoin pour développé votre activité un bot qui exécute des actions de manières automatisées ? <br/>
                    Vous êtes un streamer, vous détenez une communauté et vous avez besoins d'un bot performant ? <br/>
                </div>
                <HomeRightCaroussel/>
            </div>
        </div>
    </div>
</template>

<style scoped>
.homeDown {
    display:none;
}
.Left {
    margin-right: 100px;
}

br {
    display: block;
    content: "";
    margin-top: 15px;
}

.ContainerContent {
    margin-top: 30px;
    font-family: 'Fira Code';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    color: #A4A6AB;
}

.ContainerTitle {
    font-family: 'Montserrat';
    font-weight: 1000;
    font-size: 42px;
    line-height: 51px;
}

.discover {
    width: 100vw;

    display: flex;
    justify-content: center;
    margin-top: 50px;

    font-family: 'Fira Code';
    font-style: bold;
    font-size: 0.9vw;
}

.mainContainer {

    width: 100vw;
    height: 500px;
    display: flex;
    justify-content: center;
}

.Container {

    width: 40%;

    margin-top: 40px;
    margin-bottom: 40px;


    border-radius: 30px;

    box-shadow: 0 0 2em grey;
    text-align: center;
    padding-top: 20px;
}

</style>
