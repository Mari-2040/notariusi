import { proxy } from "valtio";

type initialData = {
  documentIssuing: string;
  documentId: string;
  doumentDate: string;
  description: string;
};

export const store = proxy<{ InformationData: initialData[] }>({
  InformationData: [],
});
