/*********************************
 * Intersection types
 *********************************/

type FileData = {
  path: string;
  content: string;
}

type DatabaseData = {
  connectionUrl: string;
  credentials: string;
}

type Status = {
  isOpen: boolean;
  errorMessage?: string;
}

type AccessedFileData = FileData & Status;
type AccessedDatabaseData = DatabaseData & Status;

const accessedFileData: AccessedFileData = {
  path: "C:/Filepath",
  content: "Content of the file",
  isOpen: false,
  errorMessage: "An error occured in accessing file data"
}

const accessedDatabaseData: AccessedDatabaseData = {
  connectionUrl: "localhost",
  credentials: "admin",
  isOpen: true,
  errorMessage: "An error occured in accessing database data"
}

/*********************************
 * Intersection interfaces
 *********************************/

interface IFileData {
  path: string;
  content: string;
}

interface IDatabaseData {
  connectionUrl: string;
  credentials: string;
}

interface IStatus {
  isOpen: boolean;
  errorMessage?: string;
}

interface IAccessedFileData extends FileData, Status {}
interface IAccessedDatabaseData extends DatabaseData, Status {}

const accessedFileDataInterface: IAccessedFileData = {
  path: "C:/Filepath",
  content: "Content of the file",
  isOpen: false,
  errorMessage: "An error occured in accessing file data"
}

const accessedDatabaseDataInterface: IAccessedDatabaseData = {
  connectionUrl: "localhost",
  credentials: "admin",
  isOpen: true,
  errorMessage: "An error occured in accessing database data"
}

/*********************************
 * Type guards
 *********************************/

type FileSource = { path: string };
type DbSource = { connectionUrl: string };

const fileSource: FileSource = {
  path: "some/path/to/file.csv"
}

const dbSource: DbSource = {
  connectionUrl: "some-connection-url"
}

type Source = FileSource | DbSource;

function loadData(source: Source) {
  if("path" in source) {
    console.log(`Open file in path ${source.path}`);
    return;
  }
}

loadData(fileSource);
loadData(dbSource);

/*********************************
 * Discriminated unions
 *********************************/

enum MediaType {
  Game,
  Movie
}

type Game = { type: MediaType.Game, platform: string };
type Movie = { type: MediaType.Movie, durationInMins: number };
type MediaDetails = { genre: string, name: string };

type MediaGame = Game & MediaDetails;
type MediaMovie = Movie & MediaDetails;

type Media = MediaGame | MediaMovie;

const game: MediaGame = {
  type: MediaType.Game,
  platform: "PC",
  genre: "RPG",
  name: "A Horror Game",
}

const movie: MediaMovie = {
  type: MediaType.Movie,
  durationInMins: 90,
  genre: "Comedy",
  name: "A Comedy Movie"
}

function logMedia(media: Media): void {
  if(media.type === MediaType.Game) {
    return;
  }
}

logMedia(game);
logMedia(movie);