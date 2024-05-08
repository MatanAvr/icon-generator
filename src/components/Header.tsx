import { DOWNLOAD_DIV_ID } from "../consts";
import { useAppDispatch, useAppSelector } from "../hooks/useStoreHooks";
import { downloadDivAsPNG } from "../utils/downloadDivAsPNG";
import { changeIconName } from "../Features/Settings";

type HeaderProps = {};

const Header = ({}: HeaderProps) => {
  const settings = useAppSelector((state) => state.settings);
  const iconName = settings.name;
  const dispatch = useAppDispatch();

  const changeIconNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newName = e.target.value;
    dispatch(changeIconName(newName));
  };
  return (
    <div
      id="header"
      className="navbar bg-base-100 h-1/10 px-10 flex justify-between"
    >
      <div>
        <div className="text-xl">Icon generator</div>
      </div>

      <div>
        <label className="input input-bordered input-primary flex items-center gap-2">
          Name:
          <input
            type="text"
            value={iconName}
            className="grow"
            onChange={changeIconNameHandler}
          />
        </label>
      </div>

      <div>
        <button
          className="btn btn-primary btn-md"
          onClick={() => {
            downloadDivAsPNG(DOWNLOAD_DIV_ID, iconName);
          }}
        >
          Download
        </button>
      </div>
    </div>
  );
};

export default Header;
