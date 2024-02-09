export interface DatabaseConnectionURI {
  protocol: string;
  username: string;
  password: string;
  host: string;
  port: string;
  databaseName: string;
}

const URI_REGEX = new RegExp(
  '(?<protocol>.*)[:][\\/][\\/](?<username>.*)[:](?<password>.*)[@](?<host>.*)[:](?<port>.*)[\\/](?<databaseName>.*)',
);

export function parseDatabaseURI(url: string): DatabaseConnectionURI {
  if (!url) {
    throw new Error('You need to specify an connection string');
  }
  const groups = URI_REGEX.exec(url)?.groups;
  return {
    host: groups ? groups['host'] : '',
    username: groups ? groups['username'] : '',
    databaseName: groups ? groups['databaseName'] : '',
    password: groups ? groups['password'] : '',
    port: groups ? groups['port'] : '',
    protocol: groups ? groups['protocol'] : '',
  };
}
