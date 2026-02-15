import useAxios from "../hooks/useAxios";
import { toast } from "react-toastify";
import { heroData } from "../data/data";

const useHeroApi = () => {
  const { sendRequest } = useAxios();

  const postHeroData = async () => {
    try {
      const data = await sendRequest({
        url: "https://jsonplaceholder.typicode.com/posts",
        method: "POST",
        data: heroData,
      });

      toast.success("Post isteği başarıyla atıldı!");
      toast.info(JSON.stringify(data, null, 2));
      return data;
    } catch {
      toast.error("İstek gönderilemedi!");
      return null;
    }
  };

  return { postHeroData };
};

export default useHeroApi;
