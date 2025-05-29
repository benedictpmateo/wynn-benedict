import { Text } from "@chakra-ui/react";
import Link from "next/link";

type FooterItemProps = {
  label: string;
  /**
   * @description if href has value, means this FooterItem is a link
   */
  href?: string;
};

const FooterItem: React.FC<FooterItemProps> = ({ label, href }) => {
  if (href) {
    return (
      <Link href={href} className="animate-link-underline">
        <FooterItem label={label} />
      </Link>
    );
  }

  return (
    <Text fontSize="11px" lineHeight="24px" letterSpacing="0.5px">
      {label}
    </Text>
  );
};

export default FooterItem;
