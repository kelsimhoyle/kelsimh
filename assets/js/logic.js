var projects = [
    project1 = {
        name: "Daily Sweat: Workout Website",
        deployed: "https://wynnc.github.io/hippie_shizzz/",
        githhub: "https://github.com/wynnc/hippie_shizzz",
        image: "",
        description: "Provides workouts based on a few selections. Either videos for a user to experience at home, gyms where the user can join classes, or meetups where the user can participate with a group. For videos the user selects a fitness type, a subtype and difficulty. For in person experiences the user selects the fitness type, enters their zip code and the radius they want to search within. "
    },
    project2 = {
        name: "Trivia Game",
        deployed: "https://kelsimhoyle.github.io/TriviaGame/",
        githhub: "https://github.com/kelsimhoyle/TriviaGame",
        image: "",
        description: "Trivia game based on Parks and Recreation. Each question and answer is timed"
    },
    project3 = {
        name: "Gif Generator",
        deployed: "https://kelsimhoyle.github.io/gif-generator/",
        githhub: "https://github.com/kelsimhoyle/gif-generator",
        image: "",
        description: "Giphy API is used in order to display gifs base on memes. The user may use the meme categories already provided on the page, or add their own!"
    }
]



function generatePortfolio() {
    var portfolioDisplay = $("<div>").attr("id", "portfolio");
    for (var i=0; i < projects.length; i++) {
        var projectDiv = $("<div>").addClass("project");
        var name = $("<h4>").text(projects[i].name);
        var deployed = $("<span>").append(`<a href="${projects[i].deployed}">Deployed Websites</a>`);
        var github = $("<span>").html(`<a href="${projects[i].githhub}" target="_blank">GitHub Repository</a>`);
        var description = $("<p>").text(projects[i].description);
        projectDiv.append(name, deployed, github, description)
        portfolioDisplay.append(projectDiv);
    }

    $("#content-display").append(portfolioDisplay);
}

$(".nav-div").on("click", function() {
    $("#content-display").empty();
    var id = $(this).attr("id");
    if (id === "portfolio") {
        generatePortfolio();
    }
})

