export type WorkExperience = {
  id: number;
  startDate: string;
  endDate: string;
  position: string;
  companyName: string;
  companyUrl: string;
  location: string;
  responsibilities: string[];
};

export type Certificate = {
  id: number;
  title: string;
  institution: string;
  dateReceived: string;
  urlLink: string;
  imgUrl: string;
};
