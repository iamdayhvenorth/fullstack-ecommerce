import moment from "moment";

const formatDate = (date: string): string => {
  const currentDate = moment();
  const formattedDate = currentDate.format("DD/MM/YYYY");
  return formattedDate;
};

export default formatDate;
