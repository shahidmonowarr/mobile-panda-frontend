import { useEffect, useState } from "react";

const useServiceDetails = (serviceId) => {
  const [serviceDetails, setServiceDetails] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/service/${serviceId}`)
      .then((res) => res.json())
      .then((data) => {
        setServiceDetails(data);});
  }, [serviceId]);
  return [serviceDetails];
}

export default useServiceDetails;