export type QuoteDetails = {
  waybill?: string;
  accnum: string;
  costcentre?: number;
  service?: string;
  waydate?: string;
  origpers?: string;
  origperadd1?: string;
  origperadd2?: string;
  origperadd3?: string;
  origperadd4?: string;
  origplace: number;
  origperpcode?: string;
  origpercontact?: string;
  origperphone?: string;
  origperphone2?: string;
  origpercell?: string;
  destpers?: string;
  destperadd1?: string;
  destperadd2?: string;
  destperadd3?: string;
  destperadd4?: string;
  destplace: number;
  desttown?: number;
  destperpcode?: string;
  destpercontact?: string;
  destperphone?: string;
  destperphone2?: string;
  destpercell?: string;
  duedate?: string;
  specinstruction?: string;
  reference?: string;
  insuranceflag?: number;
  instype?: number;
  declaredvalue?: number;
  nondoxflag?: number;
  currency?: number;
  customsvalue?: number;
  surchargeflag1?: number;
  surchargeflag2?: number;
  surchargeflag3?: number;
  surchargeflag4?: number;
  surchargeflag5?: number;
  surchargeflag6?: number;
  surchargeflag7?: number;
  surchargeflag8?: number;
  surchargeflag9?: number;
};

export type Contents = {
  item: number;
  pieces: number;
  description?: string;
  dim1: number;
  dim2: number;
  dim3: number;
  actmass: number;
};

export type SubmitWaybillSubContents = {
  quantity: number;
  description: string;
  partno?: string;
  serialno?: string;
  customsvalue?: number;
  currency?: string;
};

export type SubmitWaybillContents = Contents & {
  customsvalue: number;
  description: string;
  country: string;
  subcontents: SubmitWaybillSubContents[];
};

export type SubmitWaybillWayrefs = {
  reference: string;
  pageno: number;
};

export type SubmitWaybillTracks = {
  trackno: string;
  parcelno: number;
  item?: number;
};

export type CollectionDetails = QuoteDetails & {
  collectno?: number;
  starttime: string;
  endtime: string;
  notes?: string;
};

export type Config = {
  readonly baseUrl?: string;
};

export type SubmitWaybillArgs = {
  details: QuoteDetails;
  contents: SubmitWaybillContents[];
  wayrefs?: SubmitWaybillWayrefs[];
  tracks?: SubmitWaybillTracks[];
};

export type RequestQuoteArgs = {
  details: QuoteDetails;
  contents: Contents[];
  wayrefs?: string[];
  tracks?: string[];
};

export type SubmitCollectionArgs = {
  details: CollectionDetails;
  contents: Contents;
};

export type UpdateServiceArgs = {
  quoteno: string;
  service: string;
};

export type QuoteToWaybillArgs = {
  quoteno: string;
};

export type GetPlacesByPostCodeArgs = {
  postcode: string;
};

export type GetPlacesByNameArgs = {
  name: string;
};

export type SubmitPODArgs = {
  waybill: string;
  poddate: string;
  podtime: string;
  recipient?: string;
  details?: string;
  discrep?: string;
  idnumber?: string;
  cellnumber?: string;
};

export type SubmitEventArgs = {
  trackno: string;
  manifest?: number;
  hub?: string;
  eventtype: string;
  eventdate: string;
  eventtime: string;
};

export type SubmitWaybillEventArgs = {
  waybill: string;
  eventdate: number;
  eventtime: string;
  hub?: string;
  manifest?: number;
  eventtext: string;
};

export type GetSingleWaybillArgs = {
  waybillno: string;
};
