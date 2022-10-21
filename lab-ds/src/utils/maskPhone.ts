import { ChangeEvent } from "react";

 const maskPhone = (event: ChangeEvent<HTMLInputElement>) => {
  const a:any = event.target.value 
    .replace(/\D/g, "")
    .match(/(\d{0,2})(\d{0,5})(\d{0,4})/);

  event.target.value = !a[2]
    ? a[1]
    : "(" + a[1] + ") " + a[2] + (a[3] ? "-" + a[3] : "");
};


export default maskPhone