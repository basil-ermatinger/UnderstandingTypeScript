// Intersection types

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

console.log(`Accessed a file with path ${accessedFileData.path} and content \"${accessedFileData.content}\". Status is ${accessedFileData.isOpen ? 'open' : 'closed'} and in case of an error the following message appears: ${accessedFileData.errorMessage}`);
console.log(`Accessed a DB with connection url ${accessedDatabaseData.connectionUrl} with credentials \"${accessedDatabaseData.credentials}\". Status is ${accessedDatabaseData.isOpen ? 'open' : 'closed'} and in case of an error the following message appears: ${accessedDatabaseData.errorMessage}`);

// Intersection interfaces

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

console.log(`Accessed a file with path ${accessedFileDataInterface.path} and content \"${accessedFileDataInterface.content}\". Status is ${accessedFileDataInterface.isOpen ? 'open' : 'closed'} and in case of an error the following message appears: ${accessedFileDataInterface.errorMessage}`);
console.log(`Accessed a DB with connection url ${accessedDatabaseDataInterface.connectionUrl} with credentials \"${accessedDatabaseDataInterface.credentials}\". Status is ${accessedDatabaseDataInterface.isOpen ? 'open' : 'closed'} and in case of an error the following message appears: ${accessedDatabaseDataInterface.errorMessage}`);

// Type guards

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
  console.log(`Open database connection with connection url ${source.connectionUrl}`);
}

loadData(fileSource);
loadData(dbSource);