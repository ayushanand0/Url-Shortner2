import { storeClicks } from "@/db/apiClicks";
import { getLongUrl } from "@/db/apiUrls";
import useFetch from "@/hooks/use-fetch";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BarLoader } from "react-spinners";

const RedirectLink = () => {
  const {id} = useParams();
  const navigate = useNavigate();

  const {loading, data, fn: fetchUrl, error} = useFetch(getLongUrl, id);

  const {loading: loadingStats, fn: storeClick} = useFetch(storeClicks, {
    id: data?.id,
    originalUrl: data?.original_url,
  });

  useEffect(() => {
    fetchUrl();
  }, [fetchUrl]);

  useEffect(() => {
    if (!loading && data) {
      storeClick().then(() => {
        // Correction: Redirect to the original URL after storing the click
        window.location.href = data.original_url;
      });
    }
  }, [loading, data, storeClick]); 

  if (loading || loadingStats) {
    return (
      <>
        <BarLoader width={"100%"} color="#36d7b7" />
        <br />
        Redirecting...
      </>
    );
  }

  if (error) {
    // Correction: Display an error message if fetching the URL fails
    return (
      <div>
        <p>Error loading the URL. Please try again later.</p>
      </div>
    );
  }

  return null;
};

export default RedirectLink
