type ClocRecord = {
  total: boolean;
  language: string;
  files: number;
  filesFormatted: string;
  blank: number;
  blankFormatted: string;
  comment: number;
  commentFormatted: string;
  code: number;
  codeFormatted: string;
  filesPercent: number;
  codePercent: number;
};

export default ClocRecord;
