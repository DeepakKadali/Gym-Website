import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "@/common/types";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
  children: React.ReactNode;
};

function LearnMore({ children, setSelectedPage }: Props) {
  const page = SelectedPage.ContactUs;
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;

  return (
    <div>
      <AnchorLink
        className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
        href={`#${lowerCasePage}`}
        onClick={() => setSelectedPage(lowerCasePage)}
      >
        {children}
      </AnchorLink>
    </div>
  );
}

export default LearnMore;
