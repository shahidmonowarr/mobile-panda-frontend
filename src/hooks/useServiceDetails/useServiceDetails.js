import { useEffect, useState } from "react";

const useServiceDetails = (serviceId) => {
  const [serviceDetails, setServiceDetails] = useState({});

  useEffect(() => {
    fetch(`https://mobile-panda.onrender.com/service/${serviceId}`)
      .then((res) => res.json())
      .then((data) => {
        setServiceDetails(data);});
  }, [serviceId]);
  return [serviceDetails];
}

export default useServiceDetails;