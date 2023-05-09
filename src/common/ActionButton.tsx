import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "@/common/types";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
  children: React.ReactNode;
};

function ActionButton({ children, setSelectedPage }: Props) {
  const page = SelectedPage.ContactUs;
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;

  return (
    <div>
      <AnchorLink
        className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white"
        href={`#${lowerCasePage}`}
        onClick={() => setSelectedPage(lowerCasePage)}
      >
        {children}
      </AnchorLink>
    </div>
  );
}

export default ActionButton;
