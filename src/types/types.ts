export type Link = {
  id: string;
  url: string;
  title: string;
  tags: string[];
  createdAt?: EpochTimeStamp;
  archived?: boolean;
};

export type LinkResponse = Link & { createdAt: string };

export type LinkRecords = {
  [key: string]: Link;
};

