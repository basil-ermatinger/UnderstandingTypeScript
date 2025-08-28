"use strict";
// Intersection types
const accessedFileData = {
    path: "C:/Filepath",
    content: "Content of the file",
    isOpen: false,
    errorMessage: "An error occured in accessing file data"
};
const accessedDatabaseData = {
    connectionUrl: "localhost",
    credentials: "admin",
    isOpen: true,
    errorMessage: "An error occured in accessing database data"
};
console.log(`Accessed a file with path ${accessedFileData.path} and content \"${accessedFileData.content}\". Status is ${accessedFileData.isOpen ? 'open' : 'closed'} and in case of an error the following message appears: ${accessedFileData.errorMessage}`);
console.log(`Accessed a DB with connection url ${accessedDatabaseData.connectionUrl} with credentials \"${accessedDatabaseData.credentials}\". Status is ${accessedDatabaseData.isOpen ? 'open' : 'closed'} and in case of an error the following message appears: ${accessedDatabaseData.errorMessage}`);
const accessedFileDataInterface = {
    path: "C:/Filepath",
    content: "Content of the file",
    isOpen: false,
    errorMessage: "An error occured in accessing file data"
};
const accessedDatabaseDataInterface = {
    connectionUrl: "localhost",
    credentials: "admin",
    isOpen: true,
    errorMessage: "An error occured in accessing database data"
};
console.log(`Accessed a file with path ${accessedFileDataInterface.path} and content \"${accessedFileDataInterface.content}\". Status is ${accessedFileDataInterface.isOpen ? 'open' : 'closed'} and in case of an error the following message appears: ${accessedFileDataInterface.errorMessage}`);
console.log(`Accessed a DB with connection url ${accessedDatabaseDataInterface.connectionUrl} with credentials \"${accessedDatabaseDataInterface.credentials}\". Status is ${accessedDatabaseDataInterface.isOpen ? 'open' : 'closed'} and in case of an error the following message appears: ${accessedDatabaseDataInterface.errorMessage}`);
const fileSource = {
    path: "some/path/to/file.csv"
};
const dbSource = {
    connectionUrl: "some-connection-url"
};
function loadData(source) {
    if ("path" in source) {
        console.log(`Open file in path ${source.path}`);
        return;
    }
    console.log(`Open database connection with connection url ${source.connectionUrl}`);
}
loadData(fileSource);
loadData(dbSource);
// Discriminated unions
var MediaType;
(function (MediaType) {
    MediaType[MediaType["Game"] = 0] = "Game";
    MediaType[MediaType["Movie"] = 1] = "Movie";
})(MediaType || (MediaType = {}));
const game = {
    type: MediaType.Game,
    platform: "PC",
    genre: "RPG",
    name: "A Horror Game",
};
const movie = {
    type: MediaType.Movie,
    durationInMins: 90,
    genre: "Comedy",
    name: "A Comedy Movie"
};
function logMedia(media) {
    if (media.type === MediaType.Game) {
        console.log(`The game ${media.name} is a ${media.genre} movie and can be played on a ${media.platform}`);
        return;
    }
    console.log(`The movie ${media.name} is a ${media.genre} movie and has a duration of ${media.durationInMins} minutes.`);
}
logMedia(game);
logMedia(movie);
