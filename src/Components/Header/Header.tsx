import { AppDispatch, RootState } from "configStore";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "Slices/profileSlice";
import facebook from "Assets/images/facebook.svg";
import instagram from "Assets/images/instagram.svg";
import tiktok from "Assets/images/tiktok.svg";

const Header = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { profile } = useSelector((state: RootState) => state.profileSlice);

  useEffect(() => {
    dispatch(getProfile());

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className="w-full p-4 pt-48 bg-cover bg-no-repeat bg-[50%] rounded-md"
      style={{ backgroundImage: `url("${profile?.background}")` }}
    >
      <div className="bg-white p-3 rounded flex bg-opacity-90">
        <div
          className="w-[100px] h-[100px] rounded-[50%] border-4 border-white bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: `url("${profile?.avatar}")` }}
        ></div>
        <div className="w-[calc(100%-100px)] pl-2">
          <div className="text-primary text-base font-semibold">
            {profile?.page_name}
          </div>
          <div className="text-primary text-sm">
            {profile?.page_description}
          </div>
          <div className="mt-2 flex justify-start">
            <a href={profile?.facebook_url} target="_blank" rel="noreferrer">
              <img src={facebook} alt={facebook} width={24} height={24} />
            </a>
            <a href={profile?.instagram_url} target="_blank" rel="noreferrer">
              <img src={instagram} alt={instagram} width={24} height={24} />
            </a>
            <a href={profile?.tiktok_url} target="_blank" rel="noreferrer">
              <img src={tiktok} alt={tiktok} width={24} height={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
