import moment from "moment";

const checkAge = (date) => {
    return moment().diff(date, "years");
};

export default checkAge;
