import { storeClicks } from "@/db/apiClicks";
import { getLongUrl } from "@/db/apiUrls";
import useFetch from "@/hooks/use-fetch";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { BarLoader } from "react-spinners";

const RedirectLink = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { loading, data, fn, error } = useFetch(getLongUrl, id);
  const { loading: loadingStats, fn: fnStats } = useFetch(storeClicks);

  useEffect(() => {
    fn();
  }, []);

  useEffect(() => {
    if (!loading && data) {
      fnStats({ id: data.id, originalUrl: data.original_url }).then(() => {
        window.location.href = data.original_url;
      }).catch((err) => {
        console.error("Error storing click data:", err);
        navigate("/404"); // Navigate to a 404 page or handle the error as needed
      });
    } else if (error) {
      console.error("Error fetching URL data:", error);
      navigate("/404"); // Navigate to a 404 page or handle the error as needed
    }
  }, [loading, data, error]);

  if (loading || loadingStats) {
    return (
      <>
        <BarLoader width={"100%"} color="#36d7b7" />
        <br />
        Redirecting...
      </>
    );
  }

  return null;
};

export default RedirectLink;
